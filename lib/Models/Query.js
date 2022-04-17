"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
// Dependencies
const __1 = require("..");
// Class
class Query {
    // Constructor
    constructor(Data) {
        Object.assign(this, Data);
    }
    // Retrieves a Query by Uniqid.
    static async getByID(Uniqid) {
        // Convert
        const response = JSON.parse((await __1.Sellix.HttpClient.get(`queries/${Uniqid}`)).body);
        const query = new Query(response);
        // Return
        return query;
    }
    // Returns a list of all the Queries. The queries are sorted by creation date, with the most recently created queries being first. The query object does not contain all the info
    static async getAll(page) {
        // Get the queries
        const response = await __1.Sellix.HttpClient.get("queries", {
            form: { page: page }
        });
        const bodyResponse = JSON.parse(response.body);
        // Convert each object to a query object
        let queries = [];
        for (const _query of bodyResponse) {
            queries.push(new Query(_query));
        }
        //
        return queries;
    }
    // Replies to a Query
    async reply(reply) {
        // Send request
        const response = await __1.Sellix.HttpClient.post(`queries/reply/${this.uniqid}`, {
            form: { reply: reply }
        });
        // Convert response
        const bodyResponse = JSON.parse(response.body);
        // Return
        return bodyResponse;
    }
    // Closes to a Query
    async close() {
        // Send request
        const response = await __1.Sellix.HttpClient.post(`queries/close/${this.uniqid}`);
        // Convert response
        const bodyResponse = JSON.parse(response.body);
        // Return
        return bodyResponse;
    }
    // Reopen to a Query
    async reopen() {
        // Send request
        const response = await __1.Sellix.HttpClient.post(`queries/reopen/${this.uniqid}`);
        // Convert response
        const bodyResponse = JSON.parse(response.body);
        // Return
        return bodyResponse;
    }
}
exports.Query = Query;
//# sourceMappingURL=Query.js.map