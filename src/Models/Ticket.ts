// Dependencies
import { Got } from "got"
import { HttpClient } from ".."
import { ITicket, ITicketCloseResponse, ITicketReplyResponse } from "../Interfaces/ITicket"

// Class
export interface Ticket extends ITicket {}
export class Ticket {
    // Vars
    HttpClient: Got

    // Constructor
    constructor(Data: ITicket){
        Object.assign(this, Data)

        this.HttpClient = HttpClient.extend({
            headers: {
                Authorization: `Bearer ${this.api_key}`
            }
        })
    }

    // Retrieves a Ticket by Uniqid.
    static async getByID(api_key: string, id: string){
        // Convert
        const response: any = await HttpClient.get(`queries/${id}`, {
            headers: {
                Authorization: `Bearer: ${api_key}`
            }
        }).json()
        const ticket = new Ticket(response)

        // Return
        return ticket
    }
    async getByID(id: string){
        return await Ticket.getByID(this.api_key, id)
    }

    // Returns a list of all the Queries. The queries are sorted by creation date, with the most recently created queries being first. The ticket object does not contain all the info
    static async getAll(api_key: string, page?: number){
        // Get the queries
        const response: any = await HttpClient.get("queries", {
            form: {page: page},
            headers: {
                Authorization: `Bearer: ${api_key}`
            }
        }).json()

        // Convert each object to a ticket object
        let queries = []
        for (const _ticket of response){
            queries.push(new Ticket(_ticket))
        }

        //
        return queries
    }
    async getAll(page?: number){
        return await Ticket.getAll(this.api_key, page)
    }

    // Merged get
    static async get(api_key: string, param?: string | number){
        if (typeof param == "string")
            return await Ticket.getByID(api_key, param)
        else
            return await Ticket.getAll(api_key, param)
    }
    async get(param: string | number){
        return Ticket.get(this.api_key, param)
    }

    // Replies to a Ticket
    static async reply(api_key: string, id: string, reply: string){
        // Send request
        const response: ITicketReplyResponse = await HttpClient.post(`queries/reply/${id}`, {
            form: {reply: reply},
            headers: {
                Authorization: `Bearer: ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async reply(reply: string){
        return await Ticket.reply(this.api_key, this.uniqid, reply)
    }

    // Closes to a Ticket
    static async close(api_key: string, id: string){
        // Send request
        const response: ITicketCloseResponse = await HttpClient.post(`queries/close/${id}`, {
            headers: {
                Authorization: `Bearer: ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async close(){
        return await Ticket.close(this.api_key, this.uniqid)
    }

    // Reopen to a Ticket
    static async reopen(api_key: string, id: string){
        // Send request
        const response: ITicketCloseResponse = await HttpClient.post(`queries/reopen/${id}`, {
            headers: {
                Authorization: `Bearer: ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async reopen(){
        return await Ticket.reopen(this.api_key, this.uniqid)
    }
}