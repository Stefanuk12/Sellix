// MIGHT BE INCOMPLETE, DOCS DONT PROVIDE ENOUGH DETAIL

// Dependencies
import { TGateway } from "../Types/TGateway"
import { TSubscriptionStatus } from "../Types/TSubscriptionStatus"
import { ICustomFieldObj } from "./ICustomField"
import { IInvoice } from "./IInvoice"

// Interfaces
export interface ISubscription {
    id: string
    shop_id: number
    product_id: string
    status: TSubscriptionStatus
    gateway: TGateway
    custom_fields: ICustomFieldObj
    customer_email: string
    customer_id: number
    stripe_customer_id?: string
    stripe_account?: string
    stripe_subscription_id?: string
    coupon_id: string | null
    current_period_end: number,
    upcoming_email_1_week_sent: boolean
    trial_period_ending_email_sent: boolean
    renewal_invoice_created: boolean
    invoices: IInvoice[]
    created_at: number
    canceled_at: number
}