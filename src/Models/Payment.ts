// I DONT KNOW HOW TO TYPE THIS PROPERLY :(

// Dependencies
import { Sellix, StandardHttpResponse } from ".."
import { CustomField } from "./CustomField"

// Interfaces
interface IPayment {
    title: string
    product_id: string
    quantity: number
    gateway: string
    value: number
    email: string
    return_url: string
    confirmations?: number
    custom_fields?: CustomField[]
    white_label?: boolean
}

interface IPaymentCreateResponseData {
    url: string
}
interface IPaymentCreateResponse extends StandardHttpResponse {
    data: IPaymentCreateResponseData
}

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