// Dependencies
import { Got } from "got"
import { HttpClient } from "../index.js"
import { ICategory, ICategoryCreate, ICategoryCreateResponse, ICategoryEdit, ICategoryGetResponse, ICategoryListResponse } from "../Interfaces/ICategory.js"
import { SellixBase, SellixBaseString } from "../Interfaces/SellixBase.js"

//
export interface Category extends ICategory {}
export class Category {
    // Vars
    HttpClient: Got

    // Constructor
    constructor(Data: ICategory){
        Object.assign(this, Data)

        this.HttpClient = HttpClient.extend({
            headers: {
                Authorization: `Bearer ${this.api_key}`
            }
        })
    }

    // Retrieves a Category by Uniqid
    static async getByID(api_key: string, id: string){
        // Convert
        const response: SellixBase<ICategoryGetResponse> = await HttpClient.get(`categories/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()
        const category = new Category(response.data.category)

        // Return
        return category
    }
    async getByID(id: string){
        return await Category.getByID(this.api_key, id)
    }

    // Returns a list of all the Categories. The categories are sorted by creation date, with the most recently created categories being first
    static async getAll(api_key: string, page?: number){
        // Get the categories
        const response: SellixBase<ICategoryListResponse> = await HttpClient.get("categories", {
            searchParams: {page: page},
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Convert each object to a category object
        let categories = []
        for (const _category of response.data.categories){
            categories.push(new Category(_category))
        }

        //
        return categories
    }
    async getAll(page?: number){
        return await Category.getAll(this.api_key, page)
    }

    // Merged get
    static async get(api_key: string, param?: string | number){
        if (typeof param == "string")
            return await Category.getByID(api_key, param)
        else
            return await Category.getAll(api_key, param)
    }
    async get(param: string | number){
        return Category.get(this.api_key, param)
    }

    // Creates a Category and returns the Uniqid
    static async create(api_key: string, Data: ICategoryCreate){
        // Send request
        const response: ICategoryCreateResponse = await HttpClient.post("categories", {
            form: Data,
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Convert response to Category Class
        const category = await Category.getByID(api_key, response.data.uniqid)

        // Return
        return category
    }
    async create(Data: ICategoryCreate){
        return await Category.create(this.api_key, Data)
    }

    // Edits a Category
    static async edit(api_key: string, id: string, Data: ICategoryEdit){
        // Send request
        const response: SellixBaseString = await HttpClient.put(`categories/${id}`, {
            form: Data,
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async edit(Data: ICategoryEdit){
        return await Category.edit(this.api_key, this.uniqid, Data)
    }

    // Deletes a Category
    static async delete(api_key: string, id: string){
        // Send request
        const response: SellixBaseString = await HttpClient.delete(`categories/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async delete(){
        return await Category.delete(this.api_key, this.uniqid)
    }
}