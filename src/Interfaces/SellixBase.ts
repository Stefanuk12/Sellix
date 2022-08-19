// Dependencies
import HttpStatusCode from "../Enums/HttpStatusCode.js";

// The main base
export interface SellixBase<T> {
    status: HttpStatusCode
    data: T
    message: string | null
    log: string | null
    error: string | null
    env: string // usually production
}

// Some basic ones that are used default
export type SellixBaseString = SellixBase<string>
export type SellixBaseUniqid = SellixBase<{
    uniqid: string
}>