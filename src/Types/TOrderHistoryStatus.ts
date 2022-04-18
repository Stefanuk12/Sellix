// Dependencies
import { TOrderStatus } from "./TOrderStatus";

//
export type TOrderHistoryStatus = TOrderStatus & "PAYMENT_CAPTURE COMPLETED" |
                                                 "PAYMENT_CAPTURE_DENIED" |
                                                 "CUSTOMER_DISPUTE_RESOLVED" |
                                                 "PAYMENT_CAPTURE_REFUNDED" |
                                                 "PAYMENT_CAPTURE_PENDING" |
                                                 "PAYMENT_AUTHORIZATION_CREATED" |
                                                 "CHECKOUT_ORDER_APPROVED" |
                                                 "CHECKOUT_ORDER_COMPLETED" |
                                                 "CUSTOMER_DISPUTE_CREATED" |
                                                 "PAYMENT_AUTHORIZATION_VOIDED" |
                                                 "CUSTOMER_DISPUTE_UPDATED"