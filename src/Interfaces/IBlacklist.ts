// Dependencies
import { TType } from "../Types/TType.js"

// Interfaces
export interface IBlacklist {
    api_key: string

    id: number
    uniqid: string
    shop_id: string
    type: TType
    data: string
    note: string
    created_at: string
    updated_at: string
    updated_by: number
}

export interface IBlacklistListResponse {
    blacklists: IBlacklist[]
}

export interface IBlacklistCreate {
    type: TType
    data: string
    note?: string
}

export interface IBlacklistEdit {
    uniqid: number
    type: TType
    data: string
    note: string
}