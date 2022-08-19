// MIGHT BE INCOMPLETE, DOCS DONT PROVIDE ENOUGH DETAIL

// Dependencies
import { TGateway } from "../Types/TGateway.js"
import { TSubscriptionStatus } from "../Types/TSubscriptionStatus.js"
import { ICustomFieldObj } from "./ICustomField.js"
import { IInvoice } from "./IInvoice.js"

// Interfaces
export interface ISubscription {
    id?: string
    shop_id?: number
    product_id: string
    status?: TSubscriptionStatus
    gateway?: TGateway
    custom_fields?: ICustomFieldObj
    customer_id: number
    stripe_customer_id?: string
    stripe_account?: string
    stripe_subscription_id?: string
    coupon_id?: string
    current_period_end?: number,
    upcoming_email_1_week_sent?: boolean
    trial_period_ending_email_sent?: boolean
    renewal_invoice_created?: boolean
    created_at?: number
    updated_at?: number
    canceled_at?: number
    product_title?: string
    customer_name?: string
    customer_suname?: string
    customer_phone?: string
    customer_phone_country_code?: string
    customer_street_address?: string
    customer_additional_address_info?: string
    customer_city?: string
    customer_postal_code?: string
    customer_state?: string
    customer_email?: string
    invoices?: IInvoice[]
}