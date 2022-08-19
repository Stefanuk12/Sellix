// Dependencies
import { IMessage2 } from "./IMessage2.js"
import { TTicketStatus } from "../Types/TTicketStatus.js"

// Interfaces
export interface ITicket {
    api_key: string

    id: number
    uniqid: string
    customer_email: string
    shop_id: number
    title: string
    status: TTicketStatus
    messages: IMessage2[]
    day_value: number
    month: string
    year: number
    created_at: string
    updated_at: string
    updated_by: number
}

export interface ITicketGetResponse {
    query: ITicket
}

export interface ITicketListResponse {
    queries: ITicket[]
}