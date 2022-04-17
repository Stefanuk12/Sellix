import { StandardHttpResponse } from "..";
import { IMessage2 } from "../Interfaces/IMessage2";
interface IQuery {
    id: number;
    uniqid: string;
    customer_email: string;
    shop_id: number;
    title: string;
    status: string;
    messages: IMessage2[];
    day_value: number;
    month: string;
    year: number;
    created_at: Date;
    updated_at: Date;
    updated_by: number;
}
interface IQueryReplyResponse extends StandardHttpResponse {
}
interface IQueryCloseResponse extends StandardHttpResponse {
}
export declare class Query {
    id?: number;
    uniqid?: string;
    customer_email?: string;
    shop_id?: number;
    title?: string;
    status?: string;
    messages?: IMessage2[];
    day_value?: number;
    month?: string;
    year?: number;
    created_at?: Date;
    updated_at?: Date;
    updated_by?: number;
    constructor(Data: IQuery);
    static getByID(Uniqid: number): Promise<Query>;
    static getAll(page?: number): Promise<Query[]>;
    reply(reply: string): Promise<IQueryReplyResponse>;
    close(): Promise<IQueryCloseResponse>;
    reopen(): Promise<IQueryCloseResponse>;
}
export {};
//# sourceMappingURL=Query.d.ts.map