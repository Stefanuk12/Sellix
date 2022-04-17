// Dependencies
import { Product, StandardHttpResponse } from ".."

// Types
export type FeedbackScore = 1 | 2 | 3 | 4 | 5

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
    score: FeedbackScore
    invoice: Object
    product: Product
    products_bound: Object
    product_count: number
    created_at: Date
    updated_at: Date
    updated_by: number
}

export interface IFeedbackReplyResponse extends StandardHttpResponse {
    data: null
}