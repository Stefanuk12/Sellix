"use strict";
// I DONT KNOW HOW TO TYPE THIS PROPERLY :(
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
// Dependencies
const __1 = require("..");
class Payment {
    // Constructor
    constructor(Data) {
        Object.assign(this, Data);
    }
    // Creates a Payment. Returns an invoice object
    async create() {
        // Send request
        const response = await __1.Sellix.HttpClient.post("payments", {
            form: this
        });
        const bodyResponse = JSON.parse(response.body);
        //
        return bodyResponse;
    }
    // Deletes a Payment
    async delete() {
        // Send request
        const response = await __1.Sellix.HttpClient.delete("payments/:uniqid", {
            form: this
        });
        const bodyResponse = JSON.parse(response.body);
        //
        return bodyResponse;
    }
}
exports.Payment = Payment;
//# sourceMappingURL=Payment.js.map