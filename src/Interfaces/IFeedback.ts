// Dependencies
import { TFeedbackScore } from "../Types/TFeedbackScore.js"
import { IInvoice } from "./IInvoice.js"
import { IProduct } from "./IProduct.js"

// Interfaces
export interface IFeedback {
    api_key: string

    id: number
    uniqid: string
    product_id: string
    invoice_id: number
    blocked: boolean
    appealed: boolean
    shop_id: number
    message: string
    reply: string
    score: TFeedbackScore
    product_title: string
    product_image_name: string
    product_image_storage: string
    cloudflare_image_id: string
    invoice: IInvoice
    product: IProduct
    created_at: number
    updated_at: number
    updated_by: number
}

export interface IFeedbackGetResponse {
    feedback: IFeedback
}

export interface IFeedbackListResponse {
    feedback: IFeedback[]
}