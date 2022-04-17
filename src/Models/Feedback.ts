// Dependencies
import { Product, Sellix, StandardHttpResponse } from ".."

// Interfaces
type FeedbackScore = 1 | 2 | 3 | 4 | 5
interface IFeedback {
    id: number
    uniqid: string
    invoice_id: number
    product_id: string
    shop_id: number
    message: string
    reply: string
    feedback: string
    score: FeedbackScore
    invoice: Object
    product: Product
    products_bound: Object
    product_count: number
    created_at: Date
    updated_at: Date
    updated_by: number
}

interface IFeedbackReplyResponse extends StandardHttpResponse {
    data: null
}

//
export class Feedback {
    // Vars
    id?: number
    uniqid?: string
    invoice_id?: number
    product_id?: string
    shop_id?: number
    message?: string
    reply?: string
    feedback?: string
    score?: FeedbackScore
    invoice?: Object
    product?: Product
    products_bound?: Object
    product_count?: number
    created_at?: Date
    updated_at?: Date
    updated_by?: number

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