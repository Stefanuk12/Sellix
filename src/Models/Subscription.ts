// Dependencies
import { ISubscription } from "../Interfaces/ISubscription"

//
export interface Subscription extends ISubscription {}
export class Subscription {
    // Constructor
    constructor(Data: ISubscription){
        Object.assign(this, Data)
    }
}