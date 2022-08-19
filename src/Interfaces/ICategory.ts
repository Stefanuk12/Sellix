// Dependencies
import { IGroup } from "./IGroup.js"
import { IProduct } from "./IProduct.js"

// Interfaces
export interface ICategory {
    api_key: string

    id: number
    uniqid: string
    shop_id: number
    title: string
    unlisted: boolean
    sort_priority: number
    products_bound: IProduct[]
    product_count: number
    groups_bound: IGroup[]
    groups_count: number
    created_at: number
    updated_at: number
    updated_by: number
}

export interface ICategoryGetResponse {
    category: ICategory
}

export interface ICategoryListResponse {
    categories: ICategory[]
}

export interface ICategoryCreate extends Partial<ICategory> {
    title: string
}

export interface ICategoryCreateResponseData {
    uniqid: string
}
export interface ICategoryCreateResponse {
    data: ICategoryCreateResponseData
}

export interface ICategoryEdit extends ICategoryCreate {}