// Dependencies
import { ICustomField } from "./ICustomField";
import { IQuantity } from "./IQuantity";

export interface IProductCreateEdit {
    title: string;
    description: string;
    price: number;
    gateways: Array<string>;
    type: string;
    discount_value: string;
    currency: string;
    quantity: IQuantity;
    stock_delimiter: string;
    serials: Array<string>;
    serials_remove_duplicates: boolean;
    delivery_text: string;
    service_text: string;
    stock: number;
    custom_fields: Array<ICustomField>;
    crypto_confirmations_needed: number;
    max_risk_level: number;
    block_vpn_proxies: boolean;
    sort_priority: boolean;
    unlisted: boolean;
    terms_of_service: string;
    warranty: number;
    warranty_text: string;
    private: boolean;
    webhooks: Array<string>
}