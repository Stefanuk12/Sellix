// Dependencies
import { IMessage2 } from "./IMessage2"
import { StandardHttpResponse } from ".."

// Interfaces
export interface IQuery {
    id: number
    uniqid: string
    customer_email: string
    shop_id: number
    title: string
    status: string
    messages: IMessage2[]
    day_value: number
    month: string
    year: number
    created_at: Date
    updated_at: Date
    updated_by: number
}

export interface IQueryReplyResponse extends StandardHttpResponse {}
export interface IQueryCloseResponse extends StandardHttpResponse {}
