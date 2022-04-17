// I DONT KNOW HOW TO TYPE THIS PROPERLY :(

// Dependencies
import { StandardHttpResponse } from ".."
import { CustomField } from "../Models/CustomField"

// Interfaces
export interface IPayment {
    title: string
    product_id: string
    quantity: number
    gateway: string
    value: number
    email: string
    return_url: string
    confirmations?: number
    custom_fields?: CustomField[]
    white_label?: boolean
}

export interface IPaymentCreateResponseData {
    url: string
}
export interface IPaymentCreateResponse extends StandardHttpResponse {
    data: IPaymentCreateResponseData
}