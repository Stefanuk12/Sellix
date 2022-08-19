// I DONT KNOW HOW TO TYPE THIS PROPERLY :(

// Dependencies
import { TGateway } from "../Types/TGateway.js"
import { ICustomField } from "./ICustomField.js"
import { IInvoice } from "./IInvoice.js"

// Interfaces
export interface IPayment {
    api_key: string

    title: string
    product_id: string
    quantity: number
    gateway: TGateway
    value: number
    email: string
    return_url: string
    confirmations?: number
    custom_fields?: ICustomField[]
    white_label?: boolean
}

export interface IPaymentCreateResponseDataWhiteLabel {
    uniqid: string
    url: string
}

export interface IPaymentCreateResponseData {
   invoice: IInvoice
}