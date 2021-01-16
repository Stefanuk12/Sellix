// Dependencies
import { Sellix } from ".."

export class Feedback {
    // Retrieves a Feedback by Uniqid.
    async getByID(id: number){
        const response = await Sellix.HttpClient.get(`feedback/${id}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Returns a list of all the Feedback. The feedback are sorted by creation date, with the most recently created feedback being first. Invoice and Product objects are not shown in the list endpoint
    async getAll(page?: number){
        const response = await Sellix.HttpClient.get("feedback", {
            form: {page: page}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Replies to a Feedback
    async reply(uniqid: number, reply: string){
        const response = await Sellix.HttpClient.post(`feedback/${uniqid}`, {
            form: {reply: reply}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }
}