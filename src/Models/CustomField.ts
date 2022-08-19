// Dependencies
import { ICustomField } from "../Interfaces/ICustomField.js"

//
export interface CustomField extends ICustomField {}
export class CustomField {
    // Constructor
    constructor(Data: ICustomField){
        Object.assign(this, Data)
    }
}