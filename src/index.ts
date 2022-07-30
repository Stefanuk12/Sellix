// Dependencies
import got from "got"
import * as crypto from 'crypto'
import { NextFunction, Request, Response } from "express"
import { Blacklist } from "./Models/Blacklist"
import { Category } from "./Models/Category"
import { Coupon } from "./Models/Coupon"
import { CustomField } from "./Models/CustomField"
import { Feedback } from "./Models/Feedback"
import { Order } from "./Models/Order"
import { Payment } from "./Models/Payment"
import { Product } from "./Models/Product"
import { Ticket } from "./Models/Ticket"
import { Subscription } from "./Models/Subscription"
import { UserFeedback } from "./Models/UserFeedback"

// Exporting Models
export { Blacklist, Category, Coupon, CustomField, Feedback, Order, Payment, Product, Ticket, Subscription, UserFeedback }

//
export interface StandardHttpResponse {
    "status": number
    "message": string
    "log": string
    "error": string
    "env": string
}

//
export const HttpClient = got.extend({
    prefixUrl: "https://dev.sellix.io/v1/",
    headers: {
        "User-Agent": "sellix-tsjs"
    }
})

// Sellix Class. Please make sure to re-set the `HttpClient` when changing `apiKey` as auth header will not be the same.
export interface ISellix {
    WebhookSecret: string
}
export interface Sellix extends ISellix {}
export class Sellix {
    // Constructor
    constructor(Data: ISellix){
        Object.assign(this, Data)
    }

    // Verify is a webhook is legit
    verifyWebhook(GivenSignature: string, Payload: Object){
        // Generate Hmac
        const PayloadString = JSON.stringify(Payload)
        const Signature = crypto.createHmac('sha512', this.WebhookSecret).update(PayloadString).digest('hex')

        // Convert to buffers
        const GivenSignatureBuffer = Buffer.from(GivenSignature)
        const SignatureBuffer = Buffer.from(Signature)

        // Make sure are same length
        if (GivenSignatureBuffer.byteLength != SignatureBuffer.byteLength)
            return false

        // Return
        return crypto.timingSafeEqual(GivenSignatureBuffer, SignatureBuffer)
    }

    // An express middleware to check if a webhook is legit
    verifyWebhookExpress = (Request: Request, Response: Response, Next: NextFunction) => {
        // Get the signature
        let GivenSignature = Request.headers["x-sellix-signature"]
        if (!GivenSignature){
            return Response.sendStatus(401)
        }

        // Make sure it matches
        if (!this.verifyWebhook(GivenSignature.toString(), Request.body)){
            return Response.sendStatus(401)
        }
    
        //
        Next()
    }
}