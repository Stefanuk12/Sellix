// Dependencies
import { Product, Sellix } from ".."
import { ICryptoPayoutTransaction } from "../Interfaces/ICryptoPayoutTransaction"
import { ICryptoTransaction } from "../Interfaces/ICryptoTransaction"
import { IFile } from "../Interfaces/IFile"
import { IPayPalDispute } from "../Interfaces/IPayPalDispute"
import { IStatusHistory } from "../Interfaces/IStatusHistory"
import { IWebhook } from "../Interfaces/IWebhook"

//
interface IOrder {
    id: number
    uniqid: string
    total: number
    total_display: number
    currency: number
    shop_id: number
    name: string
    username: string
    product_id: string
    product_type: string
    product_title: string
    file_attachment_uniqid: string
    gateway: string
    paypal_email: string
    paypal_order_id: string
    paypal_payer_email: string
    skrill_email: string
    skrill_sid: string
    skrill_link: string
    perfectmoney_id: string
    crypto_address: string
    crypto_amount: number
    crypto_received: number
    crypto_uri: string
    crypto_confirmations_needed: number
    country: string
    location: string
    ip: string
    is_vpn_or_proxy: boolean
    user_agent: string
    quantity: number
    coupon_id: string
    custom_fields: Object
    developer_invoice: boolean
    developer_title: string
    developer_webhook: string
    developer_return_url: string
    status: number
    to_process: boolean
    discount: number
    fee_fixed: number
    fee_percentage: number
    day_value: number
    day: string
    month: string
    year: number
    created_at: Date
    serials: string[]
    status_histroy: IStatusHistory[]
    paypal_dispute: IPayPalDispute
    file: IFile
    webhooks: IWebhook[]
    crypto_payout: boolean
    crypto_payout_transaction: ICryptoPayoutTransaction
    crypto_transactions: ICryptoTransaction[]
    product: Product
}

//
export class Order {
    // Vars
    id?: number
    uniqid?: string
    total?: number
    total_display?: number
    currency?: number
    shop_id?: number
    name?: string
    username?: string
    product_id?: string
    product_type?: string
    product_title?: string
    file_attachment_uniqid?: string
    gateway?: string
    paypal_email?: string
    paypal_order_id?: string
    paypal_payer_email?: string
    skrill_email?: string
    skrill_sid?: string
    skrill_link?: string
    perfectmoney_id?: string
    crypto_address?: string
    crypto_amount?: number
    crypto_received?: number
    crypto_uri?: string
    crypto_confirmations_needed?: number
    country?: string
    location?: string
    ip?: string
    is_vpn_or_proxy?: boolean
    user_agent?: string
    quantity?: number
    coupon_id?: string
    custom_fields?: Object
    developer_invoice?: boolean
    developer_title?: string
    developer_webhook?: string
    developer_return_url?: string
    status?: number
    to_process?: boolean
    discount?: number
    fee_fixed?: number
    fee_percentage?: number
    day_value?: number
    day?: string
    month?: string
    year?: number
    created_at?: Date
    serials?: string[]
    status_histroy?: IStatusHistory[]
    paypal_dispute?: IPayPalDispute
    file?: IFile
    webhooks?: IWebhook[]
    crypto_payout?: boolean
    crypto_payout_transaction?: ICryptoPayoutTransaction
    crypto_transactions?: ICryptoTransaction[]
    product?: Product

    // Constructor
    constructor(Data: IOrder){
        Object.assign(this, Data)
    }

    // Retrieves an Order by Uniqid.
    static async getByID(id: number){
        // Convert
        const response = JSON.parse(await Sellix.HttpClient.get(`orders/${id}`).body)
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