// Dependencies
import { Got } from "got"
import { HttpClient } from "../index.js"
import { IProduct, IProductCreateEdit, IProductGetResponse, IProductListResponse } from "../Interfaces/IProduct.js"
import { SellixBase, SellixBaseString, SellixBaseUniqid } from "../Interfaces/SellixBase.js"
import { Indexer } from "../Types/TIndexer.js"

//
export interface Product extends IProduct {}
export class Product {
    // Vars
    HttpClient: Got
    indexer = this as unknown as Indexer<this>

    // Constructor
    constructor(Data: IProduct){
        Object.assign(this, Data)

        this.HttpClient = HttpClient.extend({
            headers: {
                Authorization: `Bearer ${this.api_key}`
            }
        })
    }

    // Retrieves a Product by ID
    static async getByID(api_key: string, id: string){
        // Convert
        const response: SellixBase<IProductGetResponse> = await HttpClient.get(`products/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()
        const product = new Product(response.data.product)

        // Return
        return product
    }
    async getByID(id: string){
        return await Product.getByID(this.api_key, id)
    }

    // Returns a list of all the Products. The products are sorted by creation date, with the most recently created products being first. This endpoint will return less info than the Get Product one
    static async getAll(api_key: string, page?: number){
        // Get the products
        const response: SellixBase<IProductListResponse> = await HttpClient.get("products", {
            form: {page: page},
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Convert each object to a product object
        let products = []
        for (const _product of response.data.products){
            products.push(new Product(_product))
        }

        //
        return products
    }
    async getAll(page?: number){
        return await Product.getAll(this.api_key, page)
    }

    // Merged get
    static async get(api_key: string, param?: string | number){
        if (typeof param == "string")
            return await Product.getByID(api_key, param)
        else
            return await Product.getAll(api_key, param)
    }
    async get(param: string | number){
        return Product.get(this.api_key, param)
    }

    // Creates a Product and returns the Uniqid
    static async create(api_key: string, Data: IProductCreateEdit){
        // Send response
        const response: SellixBaseUniqid = await HttpClient.post("products", {
            form: Data,
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Convert response to Product Class
        const product = await Product.getByID(api_key, response.data.uniqid)

        // Return product
        return product
    }
    async create(Data: IProductCreateEdit){
        return await Product.create(this.api_key, Data)
    }

    // Edits a Product. Arguments are the same as the create product endpoint, with the addition of remove_image and remove_file
    static async edit(api_key: string, id: string, Data: IProductCreateEdit){
        // Send response
        const response: SellixBaseString = await HttpClient.put(`products/${id}`, {
            form: Data,
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async edit(Data: IProductCreateEdit){
        // Edit this
        for (const [index, value] of Object.entries(Data)){
            this.indexer[index] = value
        }
    
        // Return
        return await Product.edit(this.api_key, this.uniqid, Data)
    }

    // Deletes a Product
    static async delete(api_key: string, id: string){
        // Send response
        const response: SellixBaseString = await HttpClient.delete(`products/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        //
        return response
    }
    async delete(){
        return await Product.delete(this.api_key, this.uniqid)
    }
}