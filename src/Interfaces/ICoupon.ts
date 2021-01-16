// Dependencies
import { IProduct } from "./IProduct";

export interface ICoupon {
    id: number;
    uniqid: string;
    shop_id: number;
    code: string;
    use_type: 0 | 1;
    discount: number
    used: number;
    max_uses: number;
    products_bound: Array<IProduct>;
    product_count: number;
    created_at: Date;
    updated_at: Date;
    updated_by: number;
}