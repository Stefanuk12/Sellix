// I DONT KNOW HOW TO TYPE THIS PROPERLY :(

// Dependencies
import { StandardHttpResponse } from ".."
import { TGateway } from "../Types/TGateway"
import { ICustomField } from "./ICustomField"

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

export interface IPaymentCreateResponseData {
    url: string
}
export interface IPaymentCreateResponse extends StandardHttpResponse {
    data: IPaymentCreateResponseData
}