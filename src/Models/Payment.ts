// I DONT KNOW HOW TO TYPE THIS PROPERLY :(

// Dependencies
import { Got } from "got"
import { HttpClient } from "../index.js"
import { IPayment, IPaymentCreateResponseData, IPaymentCreateResponseDataWhiteLabel } from "../Interfaces/IPayment.js"
import { SellixBase, SellixBaseString } from "../Interfaces/SellixBase.js"

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
        const response: SellixBase<IPaymentCreateResponseDataWhiteLabel> | SellixBase<IPaymentCreateResponseData> = await this.HttpClient.post("payments", {
            form: this
        }).json()

        //
        return response
    }

    // Deletes a Payment
    static async delete(api_key: string, id: string){
        // Send request
        const response: SellixBaseString = await HttpClient.delete(`payments/${id}`, {
            form: this,
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        //
        return response
    }
}