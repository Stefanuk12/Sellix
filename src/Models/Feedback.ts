// Dependencies
import { Got } from "got"
import { HttpClient } from "../index.js"
import { IFeedback, IFeedbackGetResponse, IFeedbackListResponse } from "../Interfaces/IFeedback.js"
import { SellixBase, SellixBaseString } from "../Interfaces/SellixBase.js"

//
export interface Feedback extends IFeedback {}
export class Feedback {
    // Vars
    HttpClient: Got

    // Constructor
    constructor(Data: IFeedback){
        Object.assign(this, Data)

        this.HttpClient = HttpClient.extend({
            headers: {
                Authorization: `Bearer ${this.api_key}`
            }
        })
    }

    // Retrieves a Feedback by Uniqid.
    static async getByID(api_key: string, id: string){
        // Convert
        const response: SellixBase<IFeedbackGetResponse> = await HttpClient.get(`feedback/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()
        const feedback = new Feedback(response.data.feedback)

        // Return
        return feedback
    }
    async getByID(id: string){
        return await Feedback.getByID(this.api_key, id)
    }

    // Returns a list of all the Feedback. The feedback are sorted by creation date, with the most recently created feedback being first. Invoice and Product objects are not shown in the list endpoint
    static async getAll(api_key: string, page?: number){
        // Get the feedback
        const response: SellixBase<IFeedbackListResponse> = await HttpClient.get("feedback", {
            form: {page: page},
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Convert each object to a query object
        let feedbacks = []
        for (const _feedback of response.data.feedback){
            feedbacks.push(new Feedback(_feedback))
        }

        //
        return feedbacks
    }
    async getAll(page?: number){
        return await Feedback.getAll(this.api_key, page)
    }

    // Merged get
    static async get(api_key: string, param?: string | number){
        if (typeof param == "string")
            return await Feedback.getByID(api_key, param)
        else
            return await Feedback.getAll(api_key, param)
    }
    async get(param: string | number){
        return Feedback.get(this.api_key, param)
    }

    // Replies to a Feedback
    static async replyTo(api_key: string, id: string, reply: string){
        // Send request
        const response: SellixBaseString = await HttpClient.post(`feedback/${id}`, {
            form: {reply: reply},
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        //
        return response
    }
    async replyTo(reply: string){
        return await Feedback.replyTo(this.api_key, this.uniqid, reply)
    }
}