import { Product, StandardHttpResponse } from "..";
declare type useType = 0 | 1;
interface ICoupon {
    id: number;
    uniqid: string;
    shop_id: number;
    code: string;
    use_type: useType;
    discount: number;
    used: number;
    max_uses: number;
    products_bound: Product[];
    product_count: number;
    created_at: Date;
    updated_at: Date;
    updated_by: number;
}
interface ICouponCreate {
    code: string;
    discount_value: number;
    max_uses?: number;
    products_bound?: string[];
}
interface ICouponEdit {
    uniqid: number;
    code: string;
    discount_value: number;
    max_uses: number;
    products_bound: string[];
}
interface ICouponEditResponseData {
    uniqid: string;
}
interface ICouponEditResponse extends StandardHttpResponse {
    data: ICouponEditResponseData;
}
export declare class Coupon {
    id?: number;
    uniqid?: string;
    shop_id?: number;
    code?: string;
    use_type?: useType;
    discount?: number;
    used?: number;
    max_uses?: number;
    products_bound?: Product[];
    product_count?: number;
    created_at?: Date;
    updated_at?: Date;
    updated_by?: number;
    constructor(Data: ICoupon);
    static getByID(id: number): Promise<Coupon>;
    static getAll(page?: number): Promise<Coupon[]>;
    create(Data: ICouponCreate): Promise<Product>;
    edit(Data: ICouponEdit): Promise<ICouponEditResponse>;
    delete(): Promise<StandardHttpResponse>;
}
export {};
//# sourceMappingURL=Coupon.d.ts.map