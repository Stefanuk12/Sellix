// I DONT KNOW HOW TO TYPE THIS PROPERLY :(

// Dependencies
import { TCurrency } from "../Types/TCurrency.js"
import { TGateway } from "../Types/TGateway.js"
import { TPayPalAPM } from "../Types/TPayPalAPM.js"
import { ICustomField } from "./ICustomField.js"
import { IInvoice } from "./IInvoice.js"

// Interfaces
export interface IPayment {
    api_key: string

    title?: string
    product_id?: string
    cart?: Object
    gateway?: TGateway
    paypal_apm?: TPayPalAPM
    credit_credit?: boolean
    lex_payment_method?: string
    value?: number
    currency?: TCurrency
    quantity?: number
    coupon_code?: string
    confirmations?: number
    email: string
    custom_fields?: ICustomField[]
    fraud_shield?: Object
    webhook?: string
    white_label?: boolean
    return_url?: string
}

export interface IPaymentCreateResponseData {
    invoice: IInvoice
}

export interface IPaymentCreateResponseDataWhiteLabel {
    uniqid: string
    url: string
}