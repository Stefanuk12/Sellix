// Dependencies
import got, { Got } from "got"
import * as crypto from 'crypto'
import { NextFunction, Request, response, Response } from "express"

// Exporting Models
export { Blacklist } from "./Models/Blacklist"
export { Category } from "./Models/Category"
export { Coupon } from "./Models/Coupon"
export { Feedback } from "./Models/Feedback"
export { Order } from "./Models/Order"
export { Payment } from "./Models/Payment"
export { Product } from "./Models/Product"
export { Query } from "./Models/Query"

//
export interface StandardHttpResponse {
    "status": number
    "message": string
    "log": string
    "error": string
    "env": string
}

// Sellix Class
export class Sellix {
    // Vars
    static apiKey: string
    static webhookSecret: string
    static apiBase: string = "https://dev.sellix.io/v1"
    static HttpClient: Got

    // Constructor
    constructor(apiKey: string, webhookSecret: string){
        Sellix.apiKey = apiKey
        Sellix.webhookSecret = webhookSecret
        Sellix.HttpClient = got.extend({
            prefixUrl: Sellix.apiBase,
            headers: {
                'Authorization': `${Sellix.apiKey}`,
                'User-Agent': `sellix-tsjs`
            }
        })
    }

    // Verify is a webhook is legit
    verifyWebhook(GivenSignature: string, Payload: Object){
        // Generate Hmac
        const PayloadString = JSON.stringify(Payload)
        const Signature = crypto.createHmac('sha512', Sellix.webhookSecret).update(PayloadString).digest('hex')

        // Convert to buffers
        const GivenSignatureBuffer = Buffer.from(GivenSignature)
        const SignatureBuffer = Buffer.from(Signature)

        // Return
        return crypto.timingSafeEqual(GivenSignatureBuffer, SignatureBuffer)
    }

    // An express middleware to check if a webhook is legit
    verifyWebhookExpress(Request: Request, Response: Response, Next: NextFunction){
        // Get the signature
        let GivenSignature = Request.headers["x-sellix-signature"]
        if (!GivenSignature){
            return response.sendStatus(401)
        }
    
        // Make sure it matches
        if (!this.verifyWebhook(GivenSignature.toString(), Request.body)){
            return response.sendStatus(401)
        }
    
        //
        Next()
    }
}