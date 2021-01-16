// Dependencies
import { Sellix } from ".."

export class Coupon {
    // Retrieves a Coupon by Uniqid.
    async getByID(id: number){
        const response = await Sellix.HttpClient.get(`coupons/${id}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Returns a list of all the Coupons. The coupons are sorted by creation date, with the most recently created coupons being first
    async getAll(page?: number){
        const response = await Sellix.HttpClient.get("coupons", {
            form: {page: page}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Creates a Coupon and returns the Uniqid
    async create(code: string, discount_value: number, max_uses?: number, products_bound?: Array<string>){
        const response = await Sellix.HttpClient.post("coupons", {
            form: {code: code, discount_value: discount_value, max_uses: max_uses, products_bound: products_bound}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Edits a Category
    async edit(uniqid: number, code: string, discount_value: number, max_uses: number, products_bound: Array<string>){
        const response = await Sellix.HttpClient.put(`coupons/${uniqid}`, {
            form: {code: code, discount_value: discount_value, max_uses: max_uses, products_bound: products_bound}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }

    // Deletes a Category
    async delete(uniqid: string){
        const response = await Sellix.HttpClient.delete(`coupons/${uniqid}`);
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }
}