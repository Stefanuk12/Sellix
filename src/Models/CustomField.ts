//
interface ICustomField {
    name: string
    type: string
    required: boolean
}

//
export class CustomField {
    // Vars
    name: string
    type: string
    required: boolean

    // Constructor
    constructor(Data: ICustomField){
        this.name = Data.name
        this.type = Data.type
        this.required = Data.required
    }
}