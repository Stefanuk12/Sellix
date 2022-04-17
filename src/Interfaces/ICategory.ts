// Dependencies
import { StandardHttpResponse } from ".."
import { Product } from "../Models/Product"

// Types
export type ICategoryUnlisted = 0 | 1

// Interfaces
export interface ICategory {
    id: number
    uniqid: string
    shop_id: number
    title: string
    unlisted: ICategoryUnlisted
    sort_priority: number
    products_bound: Product[]
    product_count: number
    created_at: Date
    updated_at: Date
    updated_by: number
}

export interface ICategoryCreate {
    title: string
    unlisted?: boolean
    sort_priority?: string
    products_bound?: string[]
}

export interface ICategoryCreateResponseData {
    uniqid: string
}
export interface ICategoryCreateResponse {
    data: ICategoryCreateResponseData
}

export interface ICategoryEdit {
    uniqid: number
    title: string
    unlisted: boolean
    sort_priority: string
    products_bound: string[]
}

export interface ICategoryEditResponseData {
    uniqid: string
}
export interface ICategoryEditResponse {
    data: ICategoryEditResponseData
}

export interface ICategoryDeleteResponse extends StandardHttpResponse {
    data: null
}