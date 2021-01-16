// Dependencies
import { ICustomField } from "./ICustomField";
import { IFeedback2 } from "./IFeedback2";

export interface IProduct {
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
    custom_fields: Array<ICustomField>;
    type: string;
    gateways: Array<string>;
    crypto_confirmations_needed: number;
    max_risk_level: number;
    block_vpn_proxies: boolean;
    private: boolean;
    stock: number;
    stock_delimiter: string;
    serials: Array<string>;
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
    webhooks: Array<string>;
    feedback: IFeedback2;
}