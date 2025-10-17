import mongoose from 'mongoose'

const Turfschema = new mongoose.Schema(
    {
        turfId: String,
        ownerId: String,
        name: String,
        location: String,
        city: String,
        description: String,
        priceperhour: Number,
        turfType: String,
        images:[String],
        amenities:[String],
        openTime:String,
        closeTime:String,
        createdAt: Date

    }
)

export const Turfs = mongoose.model("Turfs",Turfschema)
