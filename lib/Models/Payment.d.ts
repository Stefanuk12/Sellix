import { StandardHttpResponse } from "..";
import { CustomField } from "./CustomField";
interface IPayment {
    title: string;
    product_id: string;
    quantity: number;
    gateway: string;
    value: number;
    email: string;
    return_url: string;
    confirmations?: number;
    custom_fields?: CustomField[];
    white_label?: boolean;
}
interface IPaymentCreateResponseData {
    url: string;
}
interface IPaymentCreateResponse extends StandardHttpResponse {
    data: IPaymentCreateResponseData;
}
export declare class Payment {
    constructor(Data: IPayment);
    create(): Promise<IPaymentCreateResponse>;
    delete(): Promise<IPaymentCreateResponse>;
}
export {};
//# sourceMappingURL=Payment.d.ts.map