// Dependencies
import { Got } from "got"
import { HttpClient } from "../index.js"
import { ICoupon, ICouponCreate, ICouponEdit, ICouponGetResponse, ICouponListResponse } from "../Interfaces/ICoupon.js"
import { SellixBase, SellixBaseString, SellixBaseUniqid } from "../Interfaces/SellixBase.js"

//
export interface Coupon extends ICoupon {}
export class Coupon {
    // Vars
    HttpClient: Got

    // Constructor
    constructor(Data: ICoupon){
        Object.assign(this, Data)

        this.HttpClient = HttpClient.extend({
            headers: {
                Authorization: `Bearer ${this.api_key}`
            }
        })
    }

    // Retrieves a Coupon by Uniqid.
    static async getByID(api_key: string, id: string){
        // Convert
        const response: SellixBase<ICouponGetResponse> = await HttpClient.get(`coupons/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()
        const coupon = new Coupon(response.data.coupon)

        //
        return coupon
    }
    async getByID(id: string){
        return await Coupon.getByID(this.api_key, id)
    }

    // Returns a list of all the Coupons. The coupons are sorted by creation date, with the most recently created coupons being first
    static async getAll(api_key: string, page?: number){
        // Get the coupons
        const response: SellixBase<ICouponListResponse> = await HttpClient.get("coupons", {
            searchParams: {page: page},
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Convert each object to a coupons object
        let coupons = []
        for (const _coupon of response.data.coupons){
            coupons.push(new Coupon(_coupon))
        }

        //
        return coupons
    }
    async getAll(page?: number){
        return await Coupon.getAll(this.api_key, page)
    }

    // Merged get
    static async get(api_key: string, param?: string | number){
        if (typeof param == "string")
            return await Coupon.getByID(api_key, param)
        else
            return await Coupon.getAll(api_key, param)
    }
    async get(param: string | number){
        return Coupon.get(this.api_key, param)
    }

    // Creates a Coupon and returns the Uniqid
    static async create(api_key: string, Data: ICouponCreate){
        // Send request
        const response: SellixBaseUniqid = await HttpClient.post("coupons", {
            form: Data,
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()


        // Convert response to Coupon Class
        const coupon = await Coupon.getByID(api_key, response.data.uniqid)

        // Return
        return coupon
    }
    async create(Data: ICouponCreate){
        return await Coupon.create(this.api_key, Data)
    }

    // Edits a Category
    static async edit(api_key: string, id: string, Data: ICouponEdit){
        // Send request
        const response: SellixBaseString = await HttpClient.put(`coupons/${id}`, {
            form: Data,
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async edit(Data: ICouponEdit){
        return await Coupon.edit(this.api_key, this.uniqid, Data)
    }

    // Deletes a Category
    static async delete(api_key: string, id: string){
        // Send request
        const response: SellixBaseString = await HttpClient.delete(`coupons/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async delete(){
        return await Coupon.delete(this.api_key, this.uniqid)
    }
}