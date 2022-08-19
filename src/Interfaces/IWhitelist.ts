// Dependencies
import { TType } from "../Types/TType.js"

// Interfaces
export interface IWhitelist {
    api_key: string

    id: number
    uniqid: string
    shop_id: string
    type: TType
    data: string
    note: string
    created_at: string
    updated_at: number
    updated_by: number
}

export interface IWhitelistListResponse {
    whitelists: IWhitelist[]
}

export interface IWhitelistCreate {
    type: TType
    data: string
    note?: string
}

export interface IWhitelistEdit {
    uniqid: number
    type: TType
    data: string
    note: string
}