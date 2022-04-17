import { StandardHttpResponse } from "..";
import { CustomField } from "./CustomField";
import { UserFeedback } from "./UserFeedback";
declare type Indexer<T> = {
    [key: string]: T;
};
interface IProduct {
    id: number;
    uniqid: string;
    shop_id: number;
    name: string;
    price: number;
    price_display: number;
    currency: string;
    title: string;
    image_name: string;
    image_storage: string;
    image_attachment: string;
    file_attachment: string;
    description: string;
    quantity_min: number;
    quantity_max: number;
    quantity_warning: number;
    delivery_text: string;
    service_text: string;
    custom_fields: CustomField[];
    type: string;
    gateways: string[];
    crypto_confirmations_needed: number;
    max_risk_level: number;
    block_vpn_proxies: boolean;
    private: boolean;
    stock: number;
    stock_delimiter: string;
    serials: string[];
    serials_remove_duplicates: boolean;
    dymanic_webhook: string;
    unlisted: boolean;
    sort_priority: number;
    terms_of_service: string;
    warranty: number;
    warranty_text: string;
    created_at: Date;
    updated_at: Date;
    updated_by: number;
    file_attachment_info: Object;
    image_attachment_info: Object;
    webhooks: string[];
    feedback: UserFeedback[];
}
interface IProductEditResponse extends StandardHttpResponse {
}
interface IProductDeleteResponse extends StandardHttpResponse {
    data: null;
}
interface IQuantity {
    min: number;
    max: number;
}
interface IProductCreateEdit {
    title: string;
    description: string;
    price: number;
    gateways: string[];
    type: string;
    discount_value: string;
    currency: string;
    quantity: IQuantity;
    stock_delimiter: string;
    serials: string[];
    serials_remove_duplicates: boolean;
    delivery_text: string;
    service_text: string;
    stock: number;
    custom_fields: CustomField[];
    crypto_confirmations_needed: number;
    max_risk_level: number;
    block_vpn_proxies: boolean;
    sort_priority: boolean;
    unlisted: boolean;
    terms_of_service: string;
    warranty: number;
    warranty_text: string;
    private: boolean;
    webhooks: string[];
}
export declare class Product {
    id?: number;
    uniqid?: string;
    shop_id?: number;
    name?: string;
    price?: number;
    price_display?: number;
    currency?: string;
    title?: string;
    image_name?: string;
    image_storage?: string;
    image_attachment?: string;
    file_attachment?: string;
    description?: string;
    quantity_min?: number;
    quantity_max?: number;
    quantity_warning?: number;
    delivery_text?: string;
    service_text?: string;
    custom_fields?: CustomField[];
    type?: string;
    gateways?: string[];
    crypto_confirmations_needed?: number;
    max_risk_level?: number;
    block_vpn_proxies?: boolean;
    private?: boolean;
    stock?: number;
    stock_delimiter?: string;
    serials?: string[];
    serials_remove_duplicates?: boolean;
    dymanic_webhook?: string;
    unlisted?: boolean;
    sort_priority?: number;
    terms_of_service?: string;
    warranty?: number;
    warranty_text?: string;
    created_at?: Date;
    updated_at?: Date;
    updated_by?: number;
    file_attachment_info?: Object;
    image_attachment_info?: Object;
    webhooks?: string[];
    feedback?: UserFeedback[];
    indexer: Indexer<this>;
    constructor(Data: IProduct);
    static getByID(id: string): Promise<Product>;
    static getAll(page?: number): Promise<Product[]>;
    create(Data: IProductCreateEdit): Promise<Product>;
    edit(Data: IProductCreateEdit): Promise<IProductEditResponse>;
    delete(): Promise<IProductDeleteResponse>;
}
export {};
//# sourceMappingURL=Product.d.ts.map