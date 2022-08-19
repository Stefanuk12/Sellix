// Dependencies
import { TCurrency } from "../Types/TCurrency.js"
import { TGateway } from "../Types/TGateway.js"
import { TIntervals } from "../Types/TIntervals.js"
import { TProductSubType } from "../Types/TProductSubType.js"
import { TProductType } from "../Types/TProductType.js"
import { ICustomField } from "./ICustomField.js"
import { IUserFeedback } from "./IUserFeedback.js"

// Interfaces
export interface IProduct {
    api_key: string

    id: number
    uniqid: string
    shop_id: number
    type: TProductType
    subtype: TProductSubType
    title: string
    currency: TCurrency
    price: number
    price_display: number
    description: string
    image_attachment: string
    file_attachment: string
    volume_discounts: Object[]
    recurring_interval: TIntervals
    recurring_interval_count: number
    trial_period: number
    paypal_product_id: string
    paypal_plan_id: string
    stripe_price_id: string
    quantity_min: number
    quantity_max: number
    quantity_warning: number
    custom_fields: ICustomField[]
    crypto_confirmations_needed: number
    max_risk_level: number
    block_vpn_proxies: boolean
    delivery_text: string
    service_text: string
    stock_delimiter: string
    stock: number
    dymanic_webhook: string
    sort_priority: number
    unlisted: boolean
    gateways: TGateway[]
    private: boolean
    name: string
    image_name: string
    image_storage: string
    cloudflare_image_id: string
    serials: string[]
    webhooks: string[]
    feedback: IUserFeedback[]
    theme: "dark" | "light"
    dark_mode: 1 | 0
    average_score: number
    lex_payment_methods: string[]
    created_at: number
    updated_at: number
    updated_by: number
}

export interface IProductGetResponse {
    product: IProduct
}

export interface IProductListResponse {
    products: IProduct[]
}


export interface IProductCreateEdit extends Partial<IProduct> {
    title: string
    price: number
    description: string
    type: TProductType
}