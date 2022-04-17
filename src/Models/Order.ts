// Dependencies
import { Sellix } from ".."
import { IOrder } from "../Interfaces/IOrder"

//
export interface Order extends IOrder {}
export class Order {
    // Constructor
    constructor(Data: IOrder){
        Object.assign(this, Data)
    }

    // Retrieves an Order by Uniqid.
    static async getByID(id: number){
        // Convert
        const response = JSON.parse((await Sellix.HttpClient.get(`orders/${id}`)).body)
        const order = new Order(response)

        //
        return order
    }

    // Returns a list of all the Order. The order are sorted by creation date, with the most recently created order being first. Product objects and additional info are not shown in the list endpoint.
    static async getAll(page?: number){
        // Get the orders
        const response = await Sellix.HttpClient.get("orders", {
            form: {page: page}
        })
        const bodyResponse = JSON.parse(response.body)

        // Convert each object to a order object
        let orders = []
        for (const _order of bodyResponse){
            orders.push(new Order(_order))
        }
        
        //
        return orders
    }
}