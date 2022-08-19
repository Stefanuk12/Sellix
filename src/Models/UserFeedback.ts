// Dependencies
import { IUserFeedback } from "../Interfaces/IUserFeedback.js"

//
export interface UserFeedback extends IUserFeedback {}
export class UserFeedback {
    // Constructor
    constructor(Data: IUserFeedback){
        Object.assign(this, Data)
    }
}