// Dependencies
import { Sellix } from "..";
import { IProductCreateEdit } from "../Interfaces/IProductCreateEdit";

export class Product {
    // Retrieves a Product by ID
    async getByID(id: number){
        const response = await Sellix.HttpClient.get(`products/${id}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Returns a list of all the Products. The products are sorted by creation date, with the most recently created products being first. This endpoint will return less info than the Get Product one
    async getAll(page?: number){
        const response = await Sellix.HttpClient.get("products", {
            form: {page: page}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Creates a Product and returns the Uniqid
    async create(options: IProductCreateEdit){
        const response = await Sellix.HttpClient.post("products", {
            form: options
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Edits a Product. Arguments are the same as the create product endpoint, with the addition of remove_image and remove_file
    async edit(uniqid: number, options: IProductCreateEdit){
        const response = await Sellix.HttpClient.put(`products/${uniqid}`, {
            form: options
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Deletes a Product
    async delete(uniqid: string){
        const response = await Sellix.HttpClient.delete(`products/${uniqid}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }
}