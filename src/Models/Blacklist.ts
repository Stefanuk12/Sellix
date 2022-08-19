// Dependencies
import { Got } from "got"
import { HttpClient } from "../index.js"
import { IBlacklist, IBlacklistCreate, IBlacklistEdit, IBlacklistListResponse } from "../Interfaces/IBlacklist.js"
import { SellixBase, SellixBaseString, SellixBaseUniqid } from "../Interfaces/SellixBase.js"

//
export interface Blacklist extends IBlacklist {}
export class Blacklist {
    // Vars
    HttpClient: Got

    // Constructor
    constructor(Data: IBlacklist){
        Object.assign(this, Data)

        this.HttpClient = HttpClient.extend({
            headers: {
                Authorization: `Bearer ${this.api_key}`
            }
        })
    }

    // Retrieves a Blacklist by ID
    static async getByID(api_key: string, id: string){
        // Convert
        const response: SellixBase<IBlacklist> = await HttpClient.get(`blacklist/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()
        const blacklist = new Blacklist(response.data)

        // Return
        return blacklist
    }
    async getByID(id: string){
        return await Blacklist.getByID(this.api_key, id)
    }

    // Returns a list of the Blacklist. The blacklist are sorted by creation date, with the most recently created blacklist being first
    static async getAll(api_key: string, page?: number){
        // Get the blacklists
        const response: SellixBase<IBlacklistListResponse> = await HttpClient.get("blacklist", {
            form: {page: page},
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Convert each object to a blacklist object
        let blacklists = []
        for (const _blacklist of response.data.blacklists){
            blacklists.push(new Blacklist(_blacklist))
        }

        //
        return blacklists
    }
    async getAll(page?: number){
        return await Blacklist.getAll(this.api_key, page)
    }

    // Merged get
    static async get(api_key: string, param?: string | number){
        if (typeof param == "string")
            return await Blacklist.getByID(api_key, param)
        else
            return await Blacklist.getAll(api_key, param)
    }
    async get(param: string | number){
        return Blacklist.get(this.api_key, param)
    }

    // Creates a Blacklist and returns the Uniqid
    static async create(api_key: string, Data: IBlacklistCreate){
        const response: SellixBaseUniqid = await HttpClient.post("blacklist", {
            form: Data,
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Convert response to Blacklist Class
        const blacklist = await Blacklist.getByID(api_key, response.data.uniqid)

        // Return
        return blacklist
    }
    async create(Data: IBlacklistCreate){
        return await Blacklist.create(this.api_key, Data)
    }

    // Edits a Blacklist
    static async edit(api_key: string, id: string, Data: IBlacklistEdit){
        // Send request
        const response: SellixBaseString = await HttpClient.put(`blacklists/${id}`, {
            form: Data,
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async edit(Data: IBlacklistEdit){
        return await Blacklist.edit(this.api_key, this.uniqid, Data)
    }

    // Deletes a Blacklist
    static async delete(api_key: string, id: string){
        // Send request
        const response: SellixBaseString = await HttpClient.delete(`blacklists/${id}`, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).json()

        // Return
        return response
    }
    async delete(){
        return await Blacklist.delete(this.api_key, this.uniqid)
    }
}