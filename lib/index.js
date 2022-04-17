"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sellix = exports.Query = exports.Product = exports.Payment = exports.Order = exports.Feedback = exports.Coupon = exports.Category = exports.Blacklist = void 0;
// Dependencies
const got_1 = __importDefault(require("got"));
const crypto = __importStar(require("crypto"));
const express_1 = require("express");
// Exporting Models
var Blacklist_1 = require("./Models/Blacklist");
Object.defineProperty(exports, "Blacklist", { enumerable: true, get: function () { return Blacklist_1.Blacklist; } });
var Category_1 = require("./Models/Category");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return Category_1.Category; } });
var Coupon_1 = require("./Models/Coupon");
Object.defineProperty(exports, "Coupon", { enumerable: true, get: function () { return Coupon_1.Coupon; } });
var Feedback_1 = require("./Models/Feedback");
Object.defineProperty(exports, "Feedback", { enumerable: true, get: function () { return Feedback_1.Feedback; } });
var Order_1 = require("./Models/Order");
Object.defineProperty(exports, "Order", { enumerable: true, get: function () { return Order_1.Order; } });
var Payment_1 = require("./Models/Payment");
Object.defineProperty(exports, "Payment", { enumerable: true, get: function () { return Payment_1.Payment; } });
var Product_1 = require("./Models/Product");
Object.defineProperty(exports, "Product", { enumerable: true, get: function () { return Product_1.Product; } });
var Query_1 = require("./Models/Query");
Object.defineProperty(exports, "Query", { enumerable: true, get: function () { return Query_1.Query; } });
// Sellix Class
class Sellix {
    // Constructor
    constructor(apiKey, webhookSecret) {
        Sellix.apiKey = apiKey;
        Sellix.webhookSecret = webhookSecret;
        Sellix.HttpClient = got_1.default.extend({
            prefixUrl: Sellix.apiBase,
            headers: {
                'Authorization': `${Sellix.apiKey}`,
                'User-Agent': `sellix-tsjs`
            }
        });
    }
    // Verify is a webhook is legit
    verifyWebhook(GivenSignature, Payload) {
        // Generate Hmac
        const PayloadString = JSON.stringify(Payload);
        const Signature = crypto.createHmac('sha512', Sellix.webhookSecret).update(PayloadString).digest('hex');
        // Convert to buffers
        const GivenSignatureBuffer = Buffer.from(GivenSignature);
        const SignatureBuffer = Buffer.from(Signature);
        // Return
        return crypto.timingSafeEqual(GivenSignatureBuffer, SignatureBuffer);
    }
    // An express middleware to check if a webhook is legit
    verifyWebhookExpress(Request, Response, Next) {
        // Get the signature
        let GivenSignature = Request.headers["x-sellix-signature"];
        if (!GivenSignature) {
            return express_1.response.sendStatus(401);
        }
        // Make sure it matches
        if (!this.verifyWebhook(GivenSignature.toString(), Request.body)) {
            return express_1.response.sendStatus(401);
        }
        //
        Next();
    }
}
exports.Sellix = Sellix;
Sellix.apiBase = "https://dev.sellix.io/v1";
//# sourceMappingURL=index.js.map