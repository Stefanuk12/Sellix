import { StandardHttpResponse } from "..";
declare type IBlacklistType = "email" | "ip" | "country";
interface IBlacklist {
    id: number;
    uniqid: string;
    shop_id: string;
    type: IBlacklistType;
    data: string;
    note: string;
    created_at: Date;
    updated_at: Date;
    updated_by: number;
}
interface IBlacklistCreate {
    type: IBlacklistType;
    data: string;
    note?: string;
}
interface IBlacklistEdit {
    uniqid: number;
    type: IBlacklistType;
    data: string;
    note: string;
}
interface IBlacklistEditResponseData {
    uniqid: string;
}
interface IBlacklistEditResponse extends StandardHttpResponse {
    data: IBlacklistEditResponseData;
}
interface IBlacklistDeleteData {
    uniqid: string;
}
interface IBlacklistDeleteResponse extends StandardHttpResponse {
    data: IBlacklistDeleteData;
}
export declare class Blacklist {
    id?: number;
    uniqid?: string;
    shop_id?: string;
    type?: string;
    data?: string;
    note?: string;
    created_at?: Date;
    updated_at?: Date;
    updated_by?: number;
    constructor(Data: IBlacklist);
    static getByID(id: string): Promise<Blacklist>;
    static getAll(page?: number): Promise<Blacklist[]>;
    create(Data: IBlacklistCreate): Promise<Blacklist>;
    edit(Data: IBlacklistEdit): Promise<IBlacklistEditResponse>;
    delete(): Promise<IBlacklistDeleteResponse>;
}
export {};
//# sourceMappingURL=Blacklist.d.ts.map