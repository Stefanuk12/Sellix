// I DONT KNOW HOW TO TYPE THIS PROPERLY :(

// Dependencies
import { Sellix } from ".."
import { IPayment, IPaymentCreateResponse } from "../Interfaces/IPayment"

export class Payment {
    // Constructor
    constructor(Data: IPayment){
        Object.assign(this, Data)
    }

    // Creates a Payment. Returns an invoice object
    async create(){
        // Send request
        const response = await Sellix.HttpClient.post("payments", {
            form: this
        })
        const bodyResponse = <IPaymentCreateResponse>JSON.parse(response.body)

        //
        return bodyResponse
    }

    // Deletes a Payment
    async delete(){
        // Send request
        const response = await Sellix.HttpClient.delete("payments/:uniqid", {
            form: this
        })
        const bodyResponse = <IPaymentCreateResponse>JSON.parse(response.body)

        //
        return bodyResponse
    }
}