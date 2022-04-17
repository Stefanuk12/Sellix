// Dependencies
import { StandardHttpResponse } from ".."
import { TType } from "../Types/TType"

// Interfaces
export interface IBlacklist {
    id: number
    uniqid: string
    shop_id: string
    type: TType
    data: string
    note: string
    created_at: Date
    updated_at: Date
    updated_by: number
}

export interface IBlacklistCreate {
    type: TType
    data: string
    note?: string
}

export interface IBlacklistCreateResponseData {
    uniqid: string
}
export interface IBlacklistCreateResponse extends StandardHttpResponse {
    data: IBlacklistCreateResponseData
}

export interface IBlacklistEdit {
    uniqid: number
    type: TType
    data: string
    note: string
}

export interface IBlacklistEditResponseData {
    uniqid: string
}
export interface IBlacklistEditResponse extends StandardHttpResponse {
    data: IBlacklistEditResponseData
}

export interface IBlacklistDeleteData {
    uniqid: string
}
export interface IBlacklistDeleteResponse extends StandardHttpResponse {
    data: IBlacklistDeleteData
}