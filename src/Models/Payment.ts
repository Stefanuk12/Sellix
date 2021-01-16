// Dependencies
import { Sellix } from ".."
import { ICustomField } from "../Interfaces/ICustomField";

export class Payment {
    // Creates a Payment. Returns an invoice object
    async create(title: string, product_id: string, quantity: number, gateway: string, value: number, email: string, return_url: string, confirmations?: number, custom_fields?: Array<ICustomField>, white_label?: boolean){
        const response = await Sellix.HttpClient.post("payments", {
            form: {title: title, product_id: product_id, quantity: quantity, gateway: gateway, value: value, email: email, return_url: return_url, confirmations: confirmations, custom_fields: custom_fields, white_label: white_label}
        });
        const bodyResponse = JSON.parse(response.body)
        return bodyResponse;
    }
}