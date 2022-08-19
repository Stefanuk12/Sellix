// Dependencies
import { Got } from "got"
import { HttpClient } from "../index.js"
import { IWhitelist, IWhitelistCreate, IWhitelistEdit, IWhitelistListResponse } from "../Interfaces/IWhitelist.js"
import { SellixBase, SellixBaseString, SellixBaseUniqid } from "../Interfaces/SellixBase.js"

//
export interface Whitelist extends IWhitelist {}
export class Whitelist {
    // Vars
    HttpClient: Got

    // Constructor
    constructor(Data: IWhitelist){
        Object.assign(this, Data)

        this.HttpClient = HttpClient.extend({
            headers: {
                Authorization: `Bearer ${this.api_key}`
            }
        })
    }

    // Retrieves a Whitelist by ID
    static async getByID(api_key: string, id: string){
        // Convert
        const response: SellixBase<IWhitelist> = await HttpClient.get(`whitelists/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()
        const whitelist = new Whitelist(response.data)

        // Return
        return whitelist
    }
    async getByID(id: string){
        return await Whitelist.getByID(this.api_key, id)
    }

    // Returns a list of the Whitelist. The whitelist are sorted by creation date, with the most recently created whitelist being first
    static async getAll(api_key: string, page?: number){
        // Get the whitelists
        const response: SellixBase<IWhitelistListResponse> = await HttpClient.get("whitelists", {
            searchParams: {page: page},
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Convert each object to a whitelist object
        let whitelists = []
        for (const _whitelist of response.data.whitelists){
            whitelists.push(new Whitelist(_whitelist))
        }

        //
        return whitelists
    }
    async getAll(page?: number){
        return await Whitelist.getAll(this.api_key, page)
    }

    // Merged get
    static async get(api_key: string, param?: string | number){
        if (typeof param == "string")
            return await Whitelist.getByID(api_key, param)
        else
            return await Whitelist.getAll(api_key, param)
    }
    async get(param: string | number){
        return Whitelist.get(this.api_key, param)
    }

    // Creates a Whitelist and returns the Uniqid
    static async create(api_key: string, Data: IWhitelistCreate){
        const response: SellixBaseUniqid = await HttpClient.post("whitelists", {
            json: Data,
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Convert response to Whitelist Class
        const whitelist = await Whitelist.getByID(api_key, response.data.uniqid)

        // Return
        return whitelist
    }
    async create(Data: IWhitelistCreate){
        return await Whitelist.create(this.api_key, Data)
    }

    // Edits a Whitelist
    static async edit(api_key: string, id: string, Data: IWhitelistEdit){
        // Send request
        const response: SellixBaseString = await HttpClient.put(`whitelists/${id}`, {
            json: Data,
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async edit(Data: IWhitelistEdit){
        return await Whitelist.edit(this.api_key, this.uniqid, Data)
    }

    // Deletes a Whitelist
    static async delete(api_key: string, id: string){
        // Send request
        const response: SellixBaseString = await HttpClient.delete(`whitelists/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async delete(){
        return await Whitelist.delete(this.api_key, this.uniqid)
    }
}