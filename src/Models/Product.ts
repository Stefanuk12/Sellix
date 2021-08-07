// Dependencies
import { Sellix, StandardHttpResponse } from ".."
import { CustomField } from "./CustomField"
import { UserFeedback } from "./UserFeedback"

type Indexer<T> = { [ key: string ]: T }

// Interfaces
interface IProduct {
    id: number
    uniqid: string
    shop_id: number
    name: string
    price: number
    price_display: number
    currency: string
    title: string
    image_name: string
    image_storage: string
    image_attachment: string
    file_attachment: string
    description: string
    quantity_min: number
    quantity_max: number
    quantity_warning: number
    delivery_text: string
    service_text: string
    custom_fields: CustomField[]
    type: string
    gateways: string[]
    crypto_confirmations_needed: number
    max_risk_level: number
    block_vpn_proxies: boolean
    private: boolean
    stock: number
    stock_delimiter: string
    serials: string[]
    serials_remove_duplicates: boolean
    dymanic_webhook: string
    unlisted: boolean
    sort_priority: number
    terms_of_service: string
    warranty: number
    warranty_text: string
    created_at: Date
    updated_at: Date
    updated_by: number
    file_attachment_info: Object
    image_attachment_info: Object
    webhooks: string[]
    feedback: UserFeedback[]
}

interface IProductCreateResponseData {
    uniqid: string
}
interface IProductCreateResponse extends StandardHttpResponse {
    data: IProductCreateResponseData
}
interface IProductEditResponse extends StandardHttpResponse {}
interface IProductDeleteResponse extends StandardHttpResponse {
    data: null
}

interface IQuantity {
    min: number
    max: number
}

interface IProductCreateEdit {
    title: string
    description: string
    price: number
    gateways: string[]
    type: string
    discount_value: string
    currency: string
    quantity: IQuantity
    stock_delimiter: string
    serials: string[]
    serials_remove_duplicates: boolean
    delivery_text: string
    service_text: string
    stock: number
    custom_fields: CustomField[]
    crypto_confirmations_needed: number
    max_risk_level: number
    block_vpn_proxies: boolean
    sort_priority: boolean
    unlisted: boolean
    terms_of_service: string
    warranty: number
    warranty_text: string
    private: boolean
    webhooks: string[]
}

//
export class Product {
    // Vars
    id?: number
    uniqid?: string
    shop_id?: number
    name?: string
    price?: number
    price_display?: number
    currency?: string
    title?: string
    image_name?: string
    image_storage?: string
    image_attachment?: string
    file_attachment?: string
    description?: string
    quantity_min?: number
    quantity_max?: number
    quantity_warning?: number
    delivery_text?: string
    service_text?: string
    custom_fields?: CustomField[]
    type?: string
    gateways?: string[]
    crypto_confirmations_needed?: number
    max_risk_level?: number
    block_vpn_proxies?: boolean
    private?: boolean
    stock?: number
    stock_delimiter?: string
    serials?: string[]
    serials_remove_duplicates?: boolean
    dymanic_webhook?: string
    unlisted?: boolean
    sort_priority?: number
    terms_of_service?: string
    warranty?: number
    warranty_text?: string
    created_at?: Date
    updated_at?: Date
    updated_by?: number
    file_attachment_info?: Object
    image_attachment_info?: Object
    webhooks?: string[]
    feedback?: UserFeedback[]
    indexer = this as unknown as Indexer<this>

    // Constructor
    constructor(Data: IProduct){
        Object.assign(this, Data)
    }

    // Retrieves a Product by ID
    static async getByID(id: string){
        // Convert
        const response = JSON.parse(await Sellix.HttpClient.get(`products/${id}`).body)
        const product = new Product(response)

        // Return
        return product
    }

    // Returns a list of all the Products. The products are sorted by creation date, with the most recently created products being first. This endpoint will return less info than the Get Product one
    static async getAll(page?: number){
        // Get the products
        const response = await Sellix.HttpClient.get("products", {
            form: {page: page}
        })
        const bodyResponse = JSON.parse(response.body)

        // Convert each object to a product object
        let products = []
        for (const _product of bodyResponse){
            products.push(new Product(_product))
        }

        //
        return products
    }

    // Creates a Product and returns the Uniqid
    async create(Data: IProductCreateEdit){
        // Send response
        const response = await Sellix.HttpClient.post("products", {
            form: Data
        })
        const bodyResponse = <IProductCreateResponse>JSON.parse(response.body)

        // Convert response to Product Class
        const product = await Product.getByID(bodyResponse.data.uniqid)

        // Return product
        return product
    }

    // Edits a Product. Arguments are the same as the create product endpoint, with the addition of remove_image and remove_file
    async edit(Data: IProductCreateEdit){
        // Send response
        const response = await Sellix.HttpClient.put(`products/${this.uniqid}`, {
            form: Data
        })
        const bodyResponse = <IProductEditResponse>JSON.parse(response.body)

        // Edit this
        for (const [index, value] of Object.entries(Data)){
            this.indexer[index] = value
        }

        //
        return bodyResponse
    }

    // Deletes a Product
    async delete(){
        // Send response
        const response = await Sellix.HttpClient.delete(`products/${this.uniqid}`)
        const bodyResponse = <IProductDeleteResponse>JSON.parse(response.body)

        //
        return bodyResponse
    }
}