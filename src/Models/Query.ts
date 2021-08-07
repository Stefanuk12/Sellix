// Dependencies
import { Sellix, StandardHttpResponse } from ".."
import { IMessage2 } from "../Interfaces/IMessage2"

// Interfaces
interface IQuery {
    id: number
    uniqid: string
    customer_email: string
    shop_id: number
    title: string
    status: string
    messages: IMessage2[]
    day_value: number
    month: string
    year: number
    created_at: Date
    updated_at: Date
    updated_by: number
}

interface IQueryReplyResponse extends StandardHttpResponse {}
interface IQueryCloseResponse extends StandardHttpResponse {}

// Class
export class Query {
    // Vars
    id?: number
    uniqid?: string
    customer_email?: string
    shop_id?: number
    title?: string
    status?: string
    messages?: IMessage2[]
    day_value?: number
    month?: string
    year?: number
    created_at?: Date
    updated_at?: Date
    updated_by?: number 

    // Constructor
    constructor(Data: IQuery){
        Object.assign(this, Data)
    }

    // Retrieves a Query by Uniqid.
    static async getByID(Uniqid: number){
        // Convert
        const response = JSON.parse(await Sellix.HttpClient.get(`queries/${Uniqid}`).body)
        const query = new Query(response)

        // Return
        return query
    }

    // Returns a list of all the Queries. The queries are sorted by creation date, with the most recently created queries being first. The query object does not contain all the info
    static async getAll(page?: number){
        // Get the queries
        const response = await Sellix.HttpClient.get("queries", {
            form: {page: page}
        })
        const bodyResponse = JSON.parse(response.body)

        // Convert each object to a query object
        let queries = []
        for (const _query of bodyResponse){
            queries.push(new Query(_query))
        }

        //
        return queries
    }

    // Replies to a Query
    async reply(reply: string){
        // Send request
        const response = await Sellix.HttpClient.post(`queries/reply/${this.uniqid}`, {
            form: {reply: reply}
        })

        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <IQueryReplyResponse>bodyResponse
    }

    // Closes to a Query
    async close(){
        // Send request
        const response = await Sellix.HttpClient.post(`queries/close/${this.uniqid}`)

        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <IQueryCloseResponse>bodyResponse
    }

    // Reopen to a Query
    async reopen(){
        // Send request
        const response = await Sellix.HttpClient.post(`queries/reopen/${this.uniqid}`)

        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <IQueryCloseResponse>bodyResponse
    }
}