// Dependencies
import { Sellix } from ".."
import { IFeedback, IFeedbackReplyResponse } from "../Interfaces/IFeedback"

//
export interface Feedback extends IFeedback {}
export class Feedback {
    // Constructor
    constructor(Data: IFeedback){
        Object.assign(this, Data)
    }

    // Retrieves a Feedback by Uniqid.
    static async getByID(id: number){
        // Convert
        const response = JSON.parse((await Sellix.HttpClient.get(`feedback/${id}`)).body)
        const feedback = new Feedback(response)

        // Return
        return feedback
    }

    // Returns a list of all the Feedback. The feedback are sorted by creation date, with the most recently created feedback being first. Invoice and Product objects are not shown in the list endpoint
    static async getAll(page?: number){
        // Get the feedback
        const response = await Sellix.HttpClient.get("feedback", {
            form: {page: page}
        })
        const bodyResponse = JSON.parse(response.body)

        // Convert each object to a query object
        let feedbacks = []
        for (const _feedback of bodyResponse){
            feedbacks.push(new Feedback(_feedback))
        }

        //
        return feedbacks
    }

    // Replies to a Feedback
    async replyTo(reply: string){
        // Send request
        const response = await Sellix.HttpClient.post(`feedback/${this.uniqid}`, {
            form: {reply: reply}
        })
        const bodyResponse = <IFeedbackReplyResponse>JSON.parse(response.body)

        //
        return bodyResponse
    }
}