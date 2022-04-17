import { Got } from "got";
import { NextFunction, Request, Response } from "express";
export { Blacklist } from "./Models/Blacklist";
export { Category } from "./Models/Category";
export { Coupon } from "./Models/Coupon";
export { Feedback } from "./Models/Feedback";
export { Order } from "./Models/Order";
export { Payment } from "./Models/Payment";
export { Product } from "./Models/Product";
export { Query } from "./Models/Query";
export interface StandardHttpResponse {
    "status": number;
    "message": string;
    "log": string;
    "error": string;
    "env": string;
}
export declare class Sellix {
    static apiKey: string;
    static webhookSecret: string;
    static apiBase: string;
    static HttpClient: Got;
    constructor(apiKey: string, webhookSecret: string);
    verifyWebhook(GivenSignature: string, Payload: Object): boolean;
    verifyWebhookExpress(Request: Request, Response: Response, Next: NextFunction): Response<any, Record<string, any>> | undefined;
}
//# sourceMappingURL=index.d.ts.map