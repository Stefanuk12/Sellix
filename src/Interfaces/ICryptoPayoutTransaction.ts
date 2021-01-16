export interface ICryptoPayoutTransaction {
    to_address: string;
    from_adddress: string;
    crypto_amount: number;
    hash: string;
    created_at: Date;
}