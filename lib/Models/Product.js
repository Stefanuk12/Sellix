"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// Dependencies
const __1 = require("..");
//
class Product {
    // Constructor
    constructor(Data) {
        this.indexer = this;
        Object.assign(this, Data);
    }
    // Retrieves a Product by ID
    static async getByID(id) {
        // Convert
        const response = JSON.parse((await __1.Sellix.HttpClient.get(`products/${id}`)).body);
        const product = new Product(response);
        // Return
        return product;
    }
    // Returns a list of all the Products. The products are sorted by creation date, with the most recently created products being first. This endpoint will return less info than the Get Product one
    static async getAll(page) {
        // Get the products
        const response = await __1.Sellix.HttpClient.get("products", {
            form: { page: page }
        });
        const bodyResponse = JSON.parse(response.body);
        // Convert each object to a product object
        let products = [];
        for (const _product of bodyResponse) {
            products.push(new Product(_product));
        }
        //
        return products;
    }
    // Creates a Product and returns the Uniqid
    async create(Data) {
        // Send response
        const response = await __1.Sellix.HttpClient.post("products", {
            form: Data
        });
        const bodyResponse = JSON.parse(response.body);
        // Convert response to Product Class
        const product = await Product.getByID(bodyResponse.data.uniqid);
        // Return product
        return product;
    }
    // Edits a Product. Arguments are the same as the create product endpoint, with the addition of remove_image and remove_file
    async edit(Data) {
        // Send response
        const response = await __1.Sellix.HttpClient.put(`products/${this.uniqid}`, {
            form: Data
        });
        const bodyResponse = JSON.parse(response.body);
        // Edit this
        for (const [index, value] of Object.entries(Data)) {
            this.indexer[index] = value;
        }
        //
        return bodyResponse;
    }
    // Deletes a Product
    async delete() {
        // Send response
        const response = await __1.Sellix.HttpClient.delete(`products/${this.uniqid}`);
        const bodyResponse = JSON.parse(response.body);
        //
        return bodyResponse;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map