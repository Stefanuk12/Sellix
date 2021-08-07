// Dependencies
import { Product, Sellix, StandardHttpResponse } from ".."

// Interfaces
type useType = 0 | 1
interface ICoupon {
    id: number
    uniqid: string
    shop_id: number
    code: string
    use_type: useType
    discount: number
    used: number
    max_uses: number
    products_bound: Product[]
    product_count: number
    created_at: Date
    updated_at: Date
    updated_by: number
}

interface ICouponCreate {
    code: string
    discount_value: number
    max_uses?: number
    products_bound?: string[]
}

interface ICouponCreateResponseData {
    uniqid: string
}
interface ICouponCreateResponse extends StandardHttpResponse {
    data: ICouponCreateResponseData
}

interface ICouponEdit {
    uniqid: number
    code: string
    discount_value: number
    max_uses: number
    products_bound: string[]
}

interface ICouponEditResponseData {
    uniqid: string
}
interface ICouponEditResponse extends StandardHttpResponse {
    data: ICouponEditResponseData
}

//
export class Coupon {
    // Vars
    id?: number
    uniqid?: string
    shop_id?: number
    code?: string
    use_type?: useType
    discount?: number
    used?: number
    max_uses?: number
    products_bound?: Product[]
    product_count?: number
    created_at?: Date
    updated_at?: Date
    updated_by?: number

    // Constructor
    constructor(Data: ICoupon){
        Object.assign(this, Data)
    }

    // Retrieves a Coupon by Uniqid.
    static async getByID(id: number){
        // Convert
        const response = JSON.parse(await Sellix.HttpClient.get(`coupons/${id}`).body)
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