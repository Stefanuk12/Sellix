"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
// Dependencies
const __1 = require("..");
//
class Order {
    // Constructor
    constructor(Data) {
        Object.assign(this, Data);
    }
    // Retrieves an Order by Uniqid.
    static async getByID(id) {
        // Convert
        const response = JSON.parse((await __1.Sellix.HttpClient.get(`orders/${id}`)).body);
        const order = new Order(response);
        //
        return order;
    }
    // Returns a list of all the Order. The order are sorted by creation date, with the most recently created order being first. Product objects and additional info are not shown in the list endpoint.
    static async getAll(page) {
        // Get the orders
        const response = await __1.Sellix.HttpClient.get("orders", {
            form: { page: page }
        });
        const bodyResponse = JSON.parse(response.body);
        // Convert each object to a order object
        let orders = [];
        for (const _order of bodyResponse) {
            orders.push(new Order(_order));
        }
        //
        return orders;
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map