// Dependencies
import { TCategoryUnlisted } from "../Types/TCategoryUnlisted.js"
import { IProduct } from "./IProduct.js"

// Interfaces
export interface ICategory {
    api_key: string

    id: number
    uniqid: string
    shop_id: number
    title: string
    unlisted: TCategoryUnlisted
    sort_priority: number
    products_bound: IProduct[]
    product_count: number
    created_at: string
    updated_at: string
    updated_by: number
}

export interface ICategoryGetResponse {
    category: ICategory
}

export interface ICategoryListResponse {
    categories: ICategory[]
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