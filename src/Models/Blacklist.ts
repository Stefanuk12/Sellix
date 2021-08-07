// Dependencies
import { Sellix, StandardHttpResponse } from ".."

type IBlacklistType = "email" | "ip" | "country"

// Interfaces
interface IBlacklist {
    id: number
    uniqid: string
    shop_id: string
    type: IBlacklistType
    data: string
    note: string
    created_at: Date
    updated_at: Date
    updated_by: number
}

interface IBlacklistCreate {
    type: IBlacklistType
    data: string
    note?: string
}

interface IBlacklistCreateResponseData {
    uniqid: string
}
interface IBlacklistCreateResponse extends StandardHttpResponse {
    data: IBlacklistCreateResponseData
}

interface IBlacklistEdit {
    uniqid: number
    type: IBlacklistType
    data: string
    note: string
}

interface IBlacklistEditResponseData {
    uniqid: string
}
interface IBlacklistEditResponse extends StandardHttpResponse {
    data: IBlacklistEditResponseData
}

interface IBlacklistDeleteData {
    uniqid: string
}
interface IBlacklistDeleteResponse extends StandardHttpResponse {
    data: IBlacklistDeleteData
}

//
export class Blacklist {
    // Vars
    id?: number
    uniqid?: string
    shop_id?: string
    type?: string
    data?: string
    note?: string
    created_at?: Date
    updated_at?: Date
    updated_by?: number

    // Constructor
    constructor(Data: IBlacklist){
        Object.assign(this, Data)
    }

    // Retrieves a Blacklist by ID
    static async getByID(id: string){
        // Convert
        const response = JSON.parse(await Sellix.HttpClient.get(`blacklist/${id}`).body)
        const blacklist = new Blacklist(response)

        // Return
        return blacklist
    }

    // Returns a list of the Blacklist. The blacklist are sorted by creation date, with the most recently created blacklist being first
    static async getAll(page?: number){
        // Get the blacklists
        const response = await Sellix.HttpClient.get("blacklist", {
            form: {page: page}
        })
        const bodyResponse = JSON.parse(response.body)

        // Convert each object to a blacklist object
        let blacklists = []
        for (const _blacklist of bodyResponse){
            blacklists.push(new Blacklist(_blacklist))
        }

        //
        return blacklists
    }

    // Creates a Blacklist and returns the Uniqid
    async create(Data: IBlacklistCreate){
        const response = await Sellix.HttpClient.post("blacklist", {
            form: Data
        })

        // Convert response
        const bodyResponse = <IBlacklistCreateResponse>JSON.parse(response.body)

        // Convert response to Blacklist Class
        const blacklist = await Blacklist.getByID(bodyResponse.data.uniqid)

        // Return
        return blacklist
    }

    // Edits a Blacklist
    async edit(Data: IBlacklistEdit){
        // Send request
        const response = await Sellix.HttpClient.put(`blacklists/${this.uniqid}`, {
            form: Data
        })

        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <IBlacklistEditResponse>bodyResponse
    }

    // Deletes a Blacklist
    async delete(){
        // Send request
        const response = await Sellix.HttpClient.delete(`blacklists/${this.uniqid}`)
        
        // Convert response
        const bodyResponse = JSON.parse(response.body)

        // Return
        return <IBlacklistDeleteResponse>bodyResponse
    }
}