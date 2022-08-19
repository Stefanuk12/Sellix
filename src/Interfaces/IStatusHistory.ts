// Dependencies
import { TOrderHistoryStatus } from "../Types/TOrderHistoryStatus.js"

//
export interface IStatusHistory {
    id: string
    invoice_id: string
    status: TOrderHistoryStatus
    details: string
    created_at: string
}