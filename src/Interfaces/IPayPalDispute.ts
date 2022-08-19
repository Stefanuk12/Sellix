// Dependencies
import { IMessage } from "./IMessage.js"

//
export interface IPayPalDispute {
    created_at: string
    id: string
    invoice_id: string
    life_cycle_stage: string
    messages: IMessage[]
    outcome: string
    reason: string
    seller_response_due_date: string
    shop_id: string
    status: string
    updated_at: string
}