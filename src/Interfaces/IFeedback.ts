import { IProduct } from "./IProduct";

export interface IFeedback {
    id: number;
    uniqid: string;
    invoice_id: number;
    product_id: string;
    shop_id: number;
    message: string
    reply: string;
    feedback: string;
    score: 1 | 2 | 3 | 4 | 5;
    invoice: Object;
    product: IProduct;
    products_bound: Object;
    product_count: number;
    created_at: Date;
    updated_at: Date;
    updated_by: number;  
}