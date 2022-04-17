// Dependencies
import { CustomField } from "../Models/CustomField"

// Types

// Interfaces
export interface ISubscription {
    id: string
    shop_id: number
    product_id: string
    status: string
    gateway: string
    custom_fields: CustomField
}