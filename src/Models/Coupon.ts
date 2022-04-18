// Dependencies
import { Product, Sellix, StandardHttpResponse } from ".."
import { ICoupon, ICouponCreate, ICouponCreateResponse, ICouponEdit, ICouponEditResponse } from "../Interfaces/ICoupon"

//
export interface Coupon extends ICoupon {}
export class Coupon {
    // Constructor
    constructor(Data: ICoupon){
        Object.assign(this, Data)
    }

    // Retrieves a Coupon by Uniqid.
    static async getByID(id: number){
        // Convert
        const response = JSON.parse((await Sellix.HttpClient.get(`coupons/${id}`)).body)
        const coupon = new Coupon(response)

        //
        return coupon
    }

    // Returns a list of all the Coupons. The coupons are sorted by creation date, with the most recently created coupons being first
    static async getAll(page?: number){
        // Get the coupons
        const response = await Sellix.HttpClient.get("coupons", {
            form: {page: page}
        })
        const bodyResponse = JSON.parse(response.body)

        // Convert each object to a coupons object
        let coupons = []
        for (const _coupon of bodyResponse){
            coupons.push(new Coupon(_coupon))
        }

        //
        return coupons
    }

    // Creates a Coupon and returns the Uniqid
    async create(Data: ICouponCreate){
        // Send request
        const response = await Sellix.HttpClient.post("coupons", {
            form: Data
        })

        // Convert response
        const bodyResponse = <ICouponCreateResponse>JSON.parse(response.body)

        // Convert response to Coupon Class
        const coupon = await Product.getByID(bodyResponse.data.uniqid)

        // Return
        return coupon
    }

    // Edits a Category
    async edit(Data: ICouponEdit){
        // Send request
        const response = await Sellix.HttpClient.put(`coupons/${this.uniqid}`, {
            form: Data
        })

        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <ICouponEditResponse>bodyResponse
    }

    // Deletes a Category
    async delete(){
        // Send request
        const response = await Sellix.HttpClient.delete(`coupons/${this.uniqid}`)

        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <StandardHttpResponse>bodyResponse
    }
}