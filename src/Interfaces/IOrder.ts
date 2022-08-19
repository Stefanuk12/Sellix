// Dependencies
import { ICryptoPayoutTransaction } from "../Interfaces/ICryptoPayoutTransaction.js"
import { ICryptoTransaction } from "../Interfaces/ICryptoTransaction.js"
import { IFile } from "../Interfaces/IFile.js"
import { IPayPalDispute } from "../Interfaces/IPayPalDispute.js"
import { IStatusHistory } from "../Interfaces/IStatusHistory.js"
import { IWebhook } from "../Interfaces/IWebhook.js"
import { TCurrency } from "../Types/TCurrency.js"
import { TGateway } from "../Types/TGateway.js"
import { TOrderStatus } from "../Types/TOrderStatus.js"
import { TOrderType } from "../Types/TOrderType.js"
import { TOrderVoidDetails } from "../Types/TOrderVoidDetails.js"
import { TPayPalAPM } from "../Types/TPayPalAPM.js"
import { TProductSubType } from "../Types/TProductSubType.js"
import { TProductType } from "../Types/TProductType.js"
import { TStatusDetails } from "../Types/TStatusDetails.js"
import { ICustomFieldObj } from "./ICustomField.js"
import { IProduct } from "./IProduct.js"

//
export interface IOrder {
    api_key: string

    id: number
    uniqid: string
    recurring_billing_id: string
    total: number
    total_display: number
    exchange_rate: number
    crypto_exchange_rate: number
    currency: TCurrency
    shop_id: number
    shop_image_name: string
    shop_image_storage: string
    cloudflare_image_id: string
    name: string
    type: TOrderType
    customer_email: string
    paypal_email_delivery: boolean
    product_id: string
    product_title: string
    product_type: TProductType
    subtype: TProductSubType
    subscription_id: number
    subscription_time: number
    gateway: TGateway
    paypal_apm: TPayPalAPM
    username: string
    paypal_email: string
    paypal_order_id: string
    paypal_fee: string
    paypal_payer_email: string
    paypal_subscription_id: number
    paypal_subscription_link: number
    lex_order_id: string
    lex_payment_method: string
    stripe_client_secret: string
    stripe_price_id: string
    skrill_email: string
    skrill_sid: string
    skrill_link: string
    perfectmoney_id: string
    crypto_address: string
    crypto_amount: number
    crypto_received: number
    crypto_uri: string
    crypto_confirmations_needed: number
    crypto_scheduled_payout: boolean
    crypto_payout: boolean
    fee_billed: boolean
    bill_info: Object
    cashapp_qrcode: string
    cashapp_cashtag: string
    cashapp_note: string
    country: string
    location: string
    ip: string
    is_vpn_or_proxy: boolean
    user_agent: string
    quantity: number
    coupon_id: string
    custom_fields: ICustomFieldObj
    developer_invoice: boolean
    developer_title: string
    developer_webhook: string
    developer_return_url: string
    status: TOrderStatus
    status_details: TStatusDetails
    void_details: TOrderVoidDetails
    discount: number
    fee_percentage: number
    ip_info: Object
    serials: string[]
    file: IFile
    service_text: string
    dynamic_response: string
    webhooks: IWebhook[]
    crypto_payout_transaction: ICryptoPayoutTransaction
    paypal_dispute: IPayPalDispute
    status_history: IStatusHistory[]
    crypto_transactions: ICryptoTransaction[]
    gateways_available: TGateway[]
    shop_paypal_credit_card: boolean
    shop_force_paypal_email_delivery: boolean
    product: IProduct
    day_value: number
    day: string
    month: string
    year: number
    created_at: number
    updated_at: number
    updated_by: number
}

export interface IOrderGetResponse {
    order: IOrder
}

export interface IOrderListResponse {
    orders: IOrder[]
}