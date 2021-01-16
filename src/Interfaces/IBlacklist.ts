export interface IBlacklist {
    id: number;
    uniqid: string;
    shop_id: string;
    type: string;
    data: string;
    note: string;
    created_at: Date;
    updated_at: Date;
    updated_by: number
}