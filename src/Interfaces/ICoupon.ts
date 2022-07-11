// Dependencies
import { StandardHttpResponse } from ".."
import { UseType } from "../Types/TUseType"
import { IProduct } from "./IProduct"

// Interfaces
export interface ICoupon {
    api_key: string

    id: number
    uniqid: string
    shop_id: number
    code: string
    use_type: UseType
    discount: number
    used: number
    max_uses: number
    products_bound: IProduct[]
    product_count: number
    created_at: string
    updated_at: string
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