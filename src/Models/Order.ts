// Dependencies
import { Sellix } from ".."

export class Order {
    // Retrieves an Order by Uniqid.
    async getByID(id: number){
        const response = await Sellix.HttpClient.get(`orders/${id}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Returns a list of all the Order. The order are sorted by creation date, with the most recently created order being first. Product objects and additional info are not shown in the list endpoint.
    async getAll(page?: number){
        const response = await Sellix.HttpClient.get("orders", {
            form: {page: page}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }
}