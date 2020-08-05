export interface CharitiesAPI {
    charityName: String,
    categoryName: Number,
    categoryID: Number,
    causeName: String,
    causeID: Number,
    city: String,
    streetAddress1: String,
    postalCode: String,
    mission: String,
    tagline: String,
    ein: Number,
    rating: Number
}

export interface ICharity {
    id: number,
    charity_name: string,
    category_name: number,
    category_id: number,
    cause_name: string,
    cause_id: number,
    city: string,
    streetAddress1: string,
    postal_code: string,
    mission: string,
    tagline: string,
    EIN: number,
    rating: number
    _created: Date
}
