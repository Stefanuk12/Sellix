// Dependencies
import got, { Got } from "got";
import * as crypto from 'crypto';

// Exporting Models
export { Blacklist } from "./Models/Blacklist"
export { Category } from "./Models/Category"
export { Coupon } from "./Models/Coupon"
export { Feedback } from "./Models/Feedback"
export { Order } from "./Models/Order"
export { Payment } from "./Models/Payment"
export { Product } from "./Models/Product"
export { Query } from "./Models/Query"

// Sellix Class
export class Sellix {
    // Vars
    static apiKey: string;
    static apiBase: string = "https://dev.sellix.io/v1";
    static HttpClient: Got;

    // Constructor
    constructor(apiKey: string){
        Sellix.apiKey = apiKey;
        Sellix.HttpClient = got.extend({
            prefixUrl: Sellix.apiBase,
            headers: {
                'Authorization': `${Sellix.apiKey}`,
                'User-Agent': `sellix-tsjs`
            }
        });
    };


    // Verify if a webhook is valid
    private hashEquals(answer: string, guess: string){
        // Vars
        const rb = crypto.pseudoRandomBytes(32);
        const ahmac = crypto.createHmac('sha256', rb).update(answer).digest('hex');
        const ghmac = crypto.createHmac('sha256', rb).update(guess).digest('hex');
        const len = ahmac.length;

        // Loop
        let result = 0;
        for (let i = 0; i < len; ++i) {
            result |= (ahmac.charCodeAt(i) ^ ghmac.charCodeAt(i));
        };

        // Return
        return result === 0;
    };

    // Verify is a webhook is legit
    verifyWebhook(xSellixSignature: string, webhookSecret: string, requestBody: Object){
        // Generate Hmac
        const generatedHmac = crypto.createHmac('sha512', webhookSecret).update(JSON.stringify(requestBody)).digest('hex');

        // Return
        const isValid = this.hashEquals(generatedHmac, xSellixSignature);
        return isValid
    };
};