"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = void 0;
// Dependencies
const __1 = require("..");
//
class Coupon {
    // Constructor
    constructor(Data) {
        Object.assign(this, Data);
    }
    // Retrieves a Coupon by Uniqid.
    static async getByID(id) {
        // Convert
        const response = JSON.parse((await __1.Sellix.HttpClient.get(`coupons/${id}`)).body);
        const coupon = new Coupon(response);
        //
        return coupon;
    }
    // Returns a list of all the Coupons. The coupons are sorted by creation date, with the most recently created coupons being first
    static async getAll(page) {
        // Get the coupons
        const response = await __1.Sellix.HttpClient.get("coupons", {
            form: { page: page }
        });
        const bodyResponse = JSON.parse(response.body);
        // Convert each object to a coupons object
        let coupons = [];
        for (const _coupon of bodyResponse) {
            coupons.push(new Coupon(_coupon));
        }
        //
        return coupons;
    }
    // Creates a Coupon and returns the Uniqid
    async create(Data) {
        // Send request
        const response = await __1.Sellix.HttpClient.post("coupons", {
            form: Data
        });
        // Convert response
        const bodyResponse = JSON.parse(response.body);
        // Convert response to Coupon Class
        const coupon = await __1.Product.getByID(bodyResponse.data.uniqid);
        // Return
        return coupon;
    }
    // Edits a Category
    async edit(Data) {
        // Send request
        const response = await __1.Sellix.HttpClient.put(`coupons/${this.uniqid}`, {
            form: Data
        });
        // Convert response
        const bodyResponse = JSON.parse(response.body);
        // Return
        return bodyResponse;
    }
    // Deletes a Category
    async delete() {
        // Send request
        const response = await __1.Sellix.HttpClient.delete(`coupons/${this.uniqid}`);
        // Convert response
        const bodyResponse = JSON.parse(response.body);
        // Return
        return bodyResponse;
    }
}
exports.Coupon = Coupon;
//# sourceMappingURL=Coupon.js.map