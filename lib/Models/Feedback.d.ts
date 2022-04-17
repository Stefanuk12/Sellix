import { Product, StandardHttpResponse } from "..";
declare type FeedbackScore = 1 | 2 | 3 | 4 | 5;
interface IFeedback {
    id: number;
    uniqid: string;
    invoice_id: number;
    product_id: string;
    shop_id: number;
    message: string;
    reply: string;
    feedback: string;
    score: FeedbackScore;
    invoice: Object;
    product: Product;
    products_bound: Object;
    product_count: number;
    created_at: Date;
    updated_at: Date;
    updated_by: number;
}
interface IFeedbackReplyResponse extends StandardHttpResponse {
    data: null;
}
export declare class Feedback {
    id?: number;
    uniqid?: string;
    invoice_id?: number;
    product_id?: string;
    shop_id?: number;
    message?: string;
    reply?: string;
    feedback?: string;
    score?: FeedbackScore;
    invoice?: Object;
    product?: Product;
    products_bound?: Object;
    product_count?: number;
    created_at?: Date;
    updated_at?: Date;
    updated_by?: number;
    constructor(Data: IFeedback);
    static getByID(id: number): Promise<Feedback>;
    static getAll(page?: number): Promise<Feedback[]>;
    replyTo(reply: string): Promise<IFeedbackReplyResponse>;
}
export {};
//# sourceMappingURL=Feedback.d.ts.map