// Dependencies
import { Sellix } from "..";

export class Blacklist {
    // Retrieves a Blacklist by ID
    async getByID(id: number){
        const response = await Sellix.HttpClient.get(`blacklist/${id}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Returns a list of the Blacklist. The blacklist are sorted by creation date, with the most recently created blacklist being first
    async getAll(page?: number){
        const response = await Sellix.HttpClient.get("blacklist", {
            form: {page: page}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Creates a Blacklist and returns the Uniqid
    async create(type: string, data: string, note?: string){
        const response = await Sellix.HttpClient.post("blacklist", {
            form: {type: type, data: data, note: note}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Edits a Blacklist
    async edit(uniqid: number, type: string, data: string, note: string){
        const response = await Sellix.HttpClient.put(`blacklists/${uniqid}`, {
            form: {type: type, data: data, note: note}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Deletes a Blacklist
    async delete(uniqid: string){
        const response = await Sellix.HttpClient.delete(`blacklists/${uniqid}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }
}