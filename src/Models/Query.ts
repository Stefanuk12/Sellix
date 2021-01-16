// Dependencies
import { Sellix } from ".."

export class Query {
    // Retrieves a Query by Uniqid.
    async getByID(id: number){
        const response = await Sellix.HttpClient.get(`queries/${id}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Returns a list of all the Queries. The queries are sorted by creation date, with the most recently created queries being first. The query object does not contain all the info
    async getAll(page?: number){
        const response = await Sellix.HttpClient.get("queries", {
            form: {page: page}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Replies to a Query
    async reply(uniqid: number, reply: string){
        const response = await Sellix.HttpClient.post(`queries/reply/${uniqid}`, {
            form: {reply: reply}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Closes to a Query
    async close(uniqid: number){
        const response = await Sellix.HttpClient.post(`queries/close/${uniqid}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Reopen to a Query
    async reopen(uniqid: number){
        const response = await Sellix.HttpClient.post(`queries/reopen/${uniqid}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }
}