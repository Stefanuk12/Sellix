// Dependencies
import { IProduct } from "./IProduct"

export interface Category {
    id: number;
    uniqid: string;
    shop_id: number;
    title: string;
    unlisted: 0 | 1;
    sort_priority: number;
    products_bound: Array<IProduct>;
    product_count: number;
    created_at: Date;
    updated_at: Date;
    updated_by: number;
}