"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blacklist = void 0;
// Dependencies
const __1 = require("..");
//
class Blacklist {
    // Constructor
    constructor(Data) {
        Object.assign(this, Data);
    }
    // Retrieves a Blacklist by ID
    static async getByID(id) {
        // Convert
        const response = JSON.parse((await __1.Sellix.HttpClient.get(`blacklist/${id}`)).body);
        const blacklist = new Blacklist(response);
        // Return
        return blacklist;
    }
    // Returns a list of the Blacklist. The blacklist are sorted by creation date, with the most recently created blacklist being first
    static async getAll(page) {
        // Get the blacklists
        const response = await __1.Sellix.HttpClient.get("blacklist", {
            form: { page: page }
        });
        const bodyResponse = JSON.parse(response.body);
        // Convert each object to a blacklist object
        let blacklists = [];
        for (const _blacklist of bodyResponse) {
            blacklists.push(new Blacklist(_blacklist));
        }
        //
        return blacklists;
    }
    // Creates a Blacklist and returns the Uniqid
    async create(Data) {
        const response = await __1.Sellix.HttpClient.post("blacklist", {
            form: Data
        });
        // Convert response
        const bodyResponse = JSON.parse(response.body);
        // Convert response to Blacklist Class
        const blacklist = await Blacklist.getByID(bodyResponse.data.uniqid);
        // Return
        return blacklist;
    }
    // Edits a Blacklist
    async edit(Data) {
        // Send request
        const response = await __1.Sellix.HttpClient.put(`blacklists/${this.uniqid}`, {
            form: Data
        });
        // Convert response
        const bodyResponse = JSON.parse(response.body);
        // Return
        return bodyResponse;
    }
    // Deletes a Blacklist
    async delete() {
        // Send request
        const response = await __1.Sellix.HttpClient.delete(`blacklists/${this.uniqid}`);
        // Convert response
        const bodyResponse = JSON.parse(response.body);
        // Return
        return bodyResponse;
    }
}
exports.Blacklist = Blacklist;
//# sourceMappingURL=Blacklist.js.map