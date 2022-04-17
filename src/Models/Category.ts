// Dependencies
import { Product, Sellix, StandardHttpResponse } from ".."

// Interfaces
type ICategoryUnlisted = 0 | 1
interface ICategory {
    id: number
    uniqid: string
    shop_id: number
    title: string
    unlisted: ICategoryUnlisted
    sort_priority: number
    products_bound: Product[]
    product_count: number
    created_at: Date
    updated_at: Date
    updated_by: number
}

interface ICategoryCreate {
    title: string
    unlisted?: boolean
    sort_priority?: string
    products_bound?: string[]
}

interface ICategoryCreateResponseData {
    uniqid: string
}
interface ICategoryCreateResponse {
    data: ICategoryCreateResponseData
}

interface ICategoryEdit {
    uniqid: number
    title: string
    unlisted: boolean
    sort_priority: string
    products_bound: string[]
}

interface ICategoryEditResponseData {
    uniqid: string
}
interface ICategoryEditResponse {
    data: ICategoryEditResponseData
}

interface ICategoryDeleteResponse extends StandardHttpResponse {
    data: null
}

//
export class Category {
    // Vars
    id?: number
    uniqid?: string
    shop_id?: number
    title?: string
    unlisted?: ICategoryUnlisted
    sort_priority?: number
    products_bound?: Product[]
    product_count?: number
    created_at?: Date
    updated_at?: Date
    updated_by?: number

    // Constructor
    constructor(Data: ICategoryUnlisted){
        Object.assign(this, Data)
    }

    // Retrieves a Category by Uniqid
    static async getByID(id: number){
        // Convert
        const response = JSON.parse((await Sellix.HttpClient.get(`categories/${id}`)).body)
        const category = new Category(response)

        // Return
        return category
    }

    // Returns a list of all the Categories. The categories are sorted by creation date, with the most recently created categories being first
    static async getAll(page?: number){
        // Get the categories
        const response = await Sellix.HttpClient.get("categories", {
            form: {page: page}
        })
        const bodyResponse = JSON.parse(response.body)

        // Convert each object to a category object
        let categories = []
        for (const _category of bodyResponse){
            categories.push(new Category(_category))
        }

        //
        return categories
    }

    // Creates a Category and returns the Uniqid
    async create(Data: ICategoryCreate){
        // Send request
        const response = await Sellix.HttpClient.post("categories", {
            form: Data
        })

        // Convert response
        const bodyResponse = <ICategoryCreateResponse>JSON.parse(response.body)

        // Convert response to Category Class
        const category = await Product.getByID(bodyResponse.data.uniqid)

        // Return
        return category
    }

    // Edits a Category
    async edit(Data: ICategoryEdit){
        // Send request
        const response = await Sellix.HttpClient.put(`categories/${this.uniqid}`, {
            form: Data
        })

        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <ICategoryEditResponse>bodyResponse
    }

    // Deletes a Category
    async delete(){
        // Send request
        const response = await Sellix.HttpClient.delete(`categories/${this.uniqid}`)

        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <ICategoryDeleteResponse>bodyResponse
    }
}