// Dependencies
import { StandardHttpResponse } from ".."
import { Product } from "../Models/Product"

// Types
export type useType = 0 | 1

// Interfaces
export interface ICoupon {
    id: number
    uniqid: string
    shop_id: number
    code: string
    use_type: useType
    discount: number
    used: number
    max_uses: number
    products_bound: Product[]
    product_count: number
    created_at: Date
    updated_at: Date
    updated_by: number
}

export interface ICouponCreate {
    code: string
    discount_value: number
    max_uses?: number
    products_bound?: string[]
}

export interface ICouponCreateResponseData {
    uniqid: string
}
export interface ICouponCreateResponse extends StandardHttpResponse {
    data: ICouponCreateResponseData
}

export interface ICouponEdit {
    uniqid: number
    code: string
    discount_value: number
    max_uses: number
    products_bound: string[]
}

export interface ICouponEditResponseData {
    uniqid: string
}
export interface ICouponEditResponse extends StandardHttpResponse {
    data: ICouponEditResponseData
}