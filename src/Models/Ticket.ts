// Dependencies
import { Sellix } from ".."
import { ITicket, ITicketCloseResponse, ITicketReplyResponse } from "../Interfaces/ITicket"

// Class
export interface Ticket extends ITicket {}
export class Ticket {
    // Constructor
    constructor(Data: ITicket){
        Object.assign(this, Data)
    }

    // Retrieves a Ticket by Uniqid.
    static async getByID(Uniqid: number){
        // Convert
        const response = JSON.parse((await Sellix.HttpClient.get(`queries/${Uniqid}`)).body)
        const ticket = new Ticket(response)

        // Return
        return ticket
    }

    // Returns a list of all the Queries. The queries are sorted by creation date, with the most recently created queries being first. The ticket object does not contain all the info
    static async getAll(page?: number){
        // Get the queries
        const response = await Sellix.HttpClient.get("queries", {
            form: {page: page}
        })
        const bodyResponse = JSON.parse(response.body)

        // Convert each object to a ticket object
        let queries = []
        for (const _ticket of bodyResponse){
            queries.push(new Ticket(_ticket))
        }

        //
        return queries
    }

    // Replies to a Ticket
    async reply(reply: string){
        // Send request
        const response = await Sellix.HttpClient.post(`queries/reply/${this.uniqid}`, {
            form: {reply: reply}
        })

        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <ITicketReplyResponse>bodyResponse
    }

    // Closes to a Ticket
    async close(){
        // Send request
        const response = await Sellix.HttpClient.post(`queries/close/${this.uniqid}`)

        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <ITicketCloseResponse>bodyResponse
    }

    // Reopen to a Ticket
    async reopen(){
        // Send request
        const response = await Sellix.HttpClient.post(`queries/reopen/${this.uniqid}`)

        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <ITicketCloseResponse>bodyResponse
    }
}