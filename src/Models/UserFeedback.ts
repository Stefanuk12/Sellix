//
interface IUserFeedback {
    total: number
    positive: number
    neutral: number
    negative: number
}

//
export class UserFeedback {
    // Vars
    total: number
    positive: number
    neutral: number
    negative: number

    // Constructor
    constructor(Data: IUserFeedback){
        this.total = Data.total
        this.positive = Data.positive
        this.neutral = Data.neutral
        this.negative = Data.negative
    }
}