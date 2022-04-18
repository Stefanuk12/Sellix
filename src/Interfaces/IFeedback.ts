// Dependencies
import { StandardHttpResponse } from ".."
import { TFeedbackScore } from "../Types/TFeedbackScore"
import { IProduct } from "./IProduct"

// Interfaces
export interface IFeedback {
    id: number
    uniqid: string
    invoice_id: number
    product_id: string
    shop_id: number
    message: string
    reply: string
    feedback: string
    score: TFeedbackScore
    invoice: Object
    product: IProduct
    products_bound: IProduct[]
    product_count: number
    created_at: string
    updated_at: string
    updated_by: number
}

export interface IFeedbackReplyResponse extends StandardHttpResponse {
    data: null
}