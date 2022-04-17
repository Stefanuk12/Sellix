// MIGHT BE INCOMPLETE, DOCS DONT PROVIDE ENOUGH DETAIL

// Dependencies
import { ICustomFieldObj } from "./ICustomField"

// Types
export type SubscriptionStatus = "PENDING" | "CANCELED" | "TRIALING" | "ACTIVE"

// Interfaces
export interface ISubscription {
    id: string
    shop_id: number
    product_id: string
    status: SubscriptionStatus
    gateway: string
    custom_fields: ICustomFieldObj
    customer_id: number
    stripe_customer_id?: string
    stripe_account?: string
    stripe_subscription_id?: string
    coupon_id?: string
    current_period_end: number,
    upcoming_email_1_week_sent: boolean
    trial_period_ending_email_sent: boolean
    renewal_invoice_created: boolean
    invoices: Object[]
    created_at: number
    canceled_at: number
}