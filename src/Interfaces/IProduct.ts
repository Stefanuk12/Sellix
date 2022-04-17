// Dependencies

import { StandardHttpResponse } from ".."
import { CustomField } from "../Models/CustomField"
import { UserFeedback } from "../Models/UserFeedback"

// Interfaces
export interface IProduct {
    id: number
    uniqid: string
    shop_id: number
    name: string
    price: number
    price_display: number
    currency: string
    title: string
    image_name: string
    image_storage: string
    image_attachment: string
    file_attachment: string
    description: string
    quantity_min: number
    quantity_max: number
    quantity_warning: number
    delivery_text: string
    service_text: string
    custom_fields: CustomField[]
    type: string
    gateways: string[]
    crypto_confirmations_needed: number
    max_risk_level: number
    block_vpn_proxies: boolean
    private: boolean
    stock: number
    stock_delimiter: string
    serials: string[]
    serials_remove_duplicates: boolean
    dymanic_webhook: string
    unlisted: boolean
    sort_priority: number
    terms_of_service: string
    warranty: number
    warranty_text: string
    created_at: Date
    updated_at: Date
    updated_by: number
    file_attachment_info: Object
    image_attachment_info: Object
    webhooks: string[]
    feedback: UserFeedback[]
}

export interface IProductCreateResponseData {
    uniqid: string
}
export interface IProductCreateResponse extends StandardHttpResponse {
    data: IProductCreateResponseData
}
export interface IProductEditResponse extends StandardHttpResponse {}
export interface IProductDeleteResponse extends StandardHttpResponse {
    data: null
}

export interface IQuantity {
    min: number
    max: number
}

export interface IProductCreateEdit {
    title: string
    description: string
    price: number
    gateways: string[]
    type: string
    discount_value: string
    currency: string
    quantity: IQuantity
    stock_delimiter: string
    serials: string[]
    serials_remove_duplicates: boolean
    delivery_text: string
    service_text: string
    stock: number
    custom_fields: CustomField[]
    crypto_confirmations_needed: number
    max_risk_level: number
    block_vpn_proxies: boolean
    sort_priority: boolean
    unlisted: boolean
    terms_of_service: string
    warranty: number
    warranty_text: string
    private: boolean
    webhooks: string[]
}