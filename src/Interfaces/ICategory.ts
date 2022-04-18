// Dependencies
import { StandardHttpResponse } from ".."
import { TCategoryUnlisted } from "../Types/TCategoryUnlisted"
import { IProduct } from "./IProduct"

// Interfaces
export interface ICategory {
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