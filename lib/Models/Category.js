"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
// Dependencies
const __1 = require("..");
//
class Category {
    // Constructor
    constructor(Data) {
        Object.assign(this, Data);
    }
    // Retrieves a Category by Uniqid
    static async getByID(id) {
        // Convert
        const response = JSON.parse((await __1.Sellix.HttpClient.get(`categories/${id}`)).body);
        const category = new Category(response);
        // Return
        return category;
    }
    // Returns a list of all the Categories. The categories are sorted by creation date, with the most recently created categories being first
    static async getAll(page) {
        // Get the categories
        const response = await __1.Sellix.HttpClient.get("categories", {
            form: { page: page }
        });
        const bodyResponse = JSON.parse(response.body);
        // Convert each object to a category object
        let categories = [];
        for (const _category of bodyResponse) {
            categories.push(new Category(_category));
        }
        //
        return categories;
    }
    // Creates a Category and returns the Uniqid
    async create(Data) {
        // Send request
        const response = await __1.Sellix.HttpClient.post("categories", {
            form: Data
        });
        // Convert response
        const bodyResponse = JSON.parse(response.body);
        // Convert response to Category Class
        const category = await __1.Product.getByID(bodyResponse.data.uniqid);
        // Return
        return category;
    }
    // Edits a Category
    async edit(Data) {
        // Send request
        const response = await __1.Sellix.HttpClient.put(`categories/${this.uniqid}`, {
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
        const response = await __1.Sellix.HttpClient.delete(`categories/${this.uniqid}`);
        // Convert response
        const bodyResponse = JSON.parse(response.body);
        // Return
        return bodyResponse;
    }
}
exports.Category = Category;
//# sourceMappingURL=Category.js.map