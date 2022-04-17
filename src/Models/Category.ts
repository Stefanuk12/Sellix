// Dependencies
import { Product, Sellix } from ".."
import { ICategory, ICategoryCreate, ICategoryCreateResponse, ICategoryDeleteResponse, ICategoryEdit, ICategoryEditResponse } from "../Interfaces/ICategory"

//
export interface Category extends ICategory {}
export class Category {
    // Constructor
    constructor(Data: ICategory){
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