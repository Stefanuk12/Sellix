"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
// Dependencies
const __1 = require("..");
//
class Feedback {
    // Constructor
    constructor(Data) {
        Object.assign(this, Data);
    }
    // Retrieves a Feedback by Uniqid.
    static async getByID(id) {
        // Convert
        const response = JSON.parse((await __1.Sellix.HttpClient.get(`feedback/${id}`)).body);
        const feedback = new Feedback(response);
        // Return
        return feedback;
    }
    // Returns a list of all the Feedback. The feedback are sorted by creation date, with the most recently created feedback being first. Invoice and Product objects are not shown in the list endpoint
    static async getAll(page) {
        // Get the feedback
        const response = await __1.Sellix.HttpClient.get("feedback", {
            form: { page: page }
        });
        const bodyResponse = JSON.parse(response.body);
        // Convert each object to a query object
        let feedbacks = [];
        for (const _feedback of bodyResponse) {
            feedbacks.push(new Feedback(_feedback));
        }
        //
        return feedbacks;
    }
    // Replies to a Feedback
    async replyTo(reply) {
        // Send request
        const response = await __1.Sellix.HttpClient.post(`feedback/${this.uniqid}`, {
            form: { reply: reply }
        });
        const bodyResponse = JSON.parse(response.body);
        //
        return bodyResponse;
    }
}
exports.Feedback = Feedback;
//# sourceMappingURL=Feedback.js.map