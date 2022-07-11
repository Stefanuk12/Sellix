// I DONT KNOW HOW TO TYPE THIS PROPERLY :(

// Dependencies
import { Got } from "got"
import { HttpClient } from ".."
import { IPayment, IPaymentCreateResponse } from "../Interfaces/IPayment"

export interface Payment extends IPayment {}
export class Payment {
    // Vars
    HttpClient: Got

    // Constructor
    constructor(Data: IPayment){
        Object.assign(this, Data)

        this.HttpClient = HttpClient.extend({
            headers: {
                Authorization: `Bearer ${this.api_key}`
            }
        })
    }

    // Creates a Payment. Returns an invoice object
    async create(){
        // Send request
        const response: IPaymentCreateResponse = await this.HttpClient.post("payments", {
            form: this
        }).json()

        //
        return response
    }

    // Deletes a Payment
    static async delete(api_key: string, id: string){
        // Send request
        const response: IPaymentCreateResponse = await HttpClient.delete(`payments/${id}`, {
            form: this,
            headers: {
                Authorization: `Bearer: ${api_key}`
            }
        }).json()

        //
        return response
    }
}