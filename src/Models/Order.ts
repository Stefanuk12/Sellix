// Dependencies
import { Got } from "got"
import { HttpClient } from ".."
import { IOrder } from "../Interfaces/IOrder"

//
export interface Order extends IOrder {}
export class Order {
    // Vars
    HttpClient: Got

    // Constructor
    constructor(Data: IOrder){
        Object.assign(this, Data)

        this.HttpClient = HttpClient.extend({
            headers: {
                Authorization: `Bearer ${this.api_key}`
            }
        })
    }

    // Retrieves an Order by Uniqid.
    static async getByID(api_key: string, id: string){
        // Convert
        const response: any = await HttpClient.get(`orders/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()
        const order = new Order(response)

        //
        return order
    }
    async getByID(id: string){
        return await Order.getByID(this.api_key, id)
    }

    // Merged get
    static async get(api_key: string, param?: string | number){
        if (typeof param == "string")
            return await Order.getByID(api_key, param)
        else
            return await Order.getAll(api_key, param)
    }
    async get(param: string | number){
        return Order.get(this.api_key, param)
    }

    // Returns a list of all the Order. The order are sorted by creation date, with the most recently created order being first. Product objects and additional info are not shown in the list endpoint.
    static async getAll(api_key: string, page?: number){
        // Get the orders
        const response: any = await HttpClient.get("orders", {
            form: {page: page},
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Convert each object to a order object
        let orders = []
        for (const _order of response.data.orders){
            orders.push(new Order(_order))
        }
        
        //
        return orders
    }
    async getAll(page?: number){
        return await Order.getAll(this.api_key, page)
    }
}