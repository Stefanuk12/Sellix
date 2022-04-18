export interface IWebhook {
    uniqid: string
    url: string
    event: string
    retries: string
    response_code: number
    created_at: string
}