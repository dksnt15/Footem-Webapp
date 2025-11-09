import mongoose from 'mongoose'

const Turfschema = new mongoose.Schema(
    {
        turfId: {
            type: String,
            required: true,
            unique: true,
        },
        ownerId: {
            type: String,
            required: true,

        },
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        description: {
            type: String,

        },
        priceperhour: {
            type: Number,
            required: true,
        },
        turfType: {
            type: String,
            enum: ['5v5', '6v6', '7v7','8v8','9v9','11v11'],
        },
        images:[String],
        amenities:[String],
        openTime:{
            type: String,
        },
        closeTime:{
            type: String,
        },
        createdAt: Date

    }
)

export const Turfs = mongoose.model("Turfs",Turfschema)
