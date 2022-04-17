// Dependencies
import { IUserFeedback } from "../Interfaces/IUserFeedback"

//
export interface UserFeedback extends IUserFeedback {}
export class UserFeedback {
    // Constructor
    constructor(Data: IUserFeedback){
        Object.assign(this, Data)
    }
}