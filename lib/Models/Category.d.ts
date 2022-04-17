import { Product, StandardHttpResponse } from "..";
declare type ICategoryUnlisted = 0 | 1;
interface ICategoryCreate {
    title: string;
    unlisted?: boolean;
    sort_priority?: string;
    products_bound?: string[];
}
interface ICategoryEdit {
    uniqid: number;
    title: string;
    unlisted: boolean;
    sort_priority: string;
    products_bound: string[];
}
interface ICategoryEditResponseData {
    uniqid: string;
}
interface ICategoryEditResponse {
    data: ICategoryEditResponseData;
}
interface ICategoryDeleteResponse extends StandardHttpResponse {
    data: null;
}
export declare class Category {
    id?: number;
    uniqid?: string;
    shop_id?: number;
    title?: string;
    unlisted?: ICategoryUnlisted;
    sort_priority?: number;
    products_bound?: Product[];
    product_count?: number;
    created_at?: Date;
    updated_at?: Date;
    updated_by?: number;
    constructor(Data: ICategoryUnlisted);
    static getByID(id: number): Promise<Category>;
    static getAll(page?: number): Promise<Category[]>;
    create(Data: ICategoryCreate): Promise<Product>;
    edit(Data: ICategoryEdit): Promise<ICategoryEditResponse>;
    delete(): Promise<ICategoryDeleteResponse>;
}
export {};
//# sourceMappingURL=Category.d.ts.map