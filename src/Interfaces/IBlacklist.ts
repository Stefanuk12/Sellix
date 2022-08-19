// Dependencies
import { TBlacklistScope } from "../Types/TBlacklistScope.js"
import { TType } from "../Types/TType.js"

// Interfaces
export interface IBlacklist {
    api_key: string

    id: number
    uniqid: string
    scope: TBlacklistScope
    shop_id: string
    type: TType
    data: string
    note: string
    created_at: string
    updated_at: number
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