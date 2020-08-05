export interface TCharitiesAPI {
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

export interface TCharitiesfromDB {
    id: Number,
    charity_name: String,
    category_name: Number,
    category_id: Number,
    cause_name: String,
    cause_id: Number,
    city: String,
    streetAddress1: String,
    postal_code: String,
    mission: String,
    tagline: String,
    EIN: Number,
    rating: Number
    _created: Date
}
