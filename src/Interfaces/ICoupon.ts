// Dependencies
import { TCouponType } from "../Types/TCouponType.js"
import { TCurrency } from "../Types/TCurrency.js"
import { UseType } from "../Types/TUseType.js"

// Interfaces
export interface ICoupon {
    api_key: string

    id: number
    uniqid: string
    shop_id: number
    type: TCouponType
    code: string
    use_type: UseType
    discount: number
    currency: TCurrency
    used: number
    disabled_with_volume_discounts: boolean
    all_recurring_bill_invoices: boolean
    max_uses: number
    products_bound: string[]
    product_count: number
    created_at: number
    updated_at: number
    updated_by: number
}

export interface ICouponGetResponse {
    coupon: ICoupon
}

export interface ICouponListResponse {
    coupons: ICoupon[]
}

export interface ICouponCreate extends Partial<ICoupon> {
    code: string
    discount_value: number
}

export type ICouponEdit = ICouponCreate