// Dependencies
import { Sellix } from "..";

export class Category {
    // Retrieves a Category by Uniqid
    async getByID(id: number){
        const response = await Sellix.HttpClient.get(`categories/${id}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Returns a list of all the Categories. The categories are sorted by creation date, with the most recently created categories being first
    async getAll(page?: number){
        const response = await Sellix.HttpClient.get("categories", {
            form: {page: page}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Creates a Category and returns the Uniqid
    async create(title: string, unlisted?: boolean, sort_priority?: string, products_bound?: Array<string>){
        const response = await Sellix.HttpClient.post("categories", {
            form: {title: title, unlisted: unlisted, sort_priority: sort_priority, products_bound: products_bound}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Edits a Category
    async edit(uniqid: number, title: string, unlisted: boolean, sort_priority: string, products_bound: Array<string>){
        const response = await Sellix.HttpClient.put(`categories/${uniqid}`, {
            form: {title: title, unlisted: unlisted, sort_priority: sort_priority, products_bound: products_bound}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Deletes a Category
    async delete(uniqid: string){
        const response = await Sellix.HttpClient.delete(`categories/${uniqid}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }
}