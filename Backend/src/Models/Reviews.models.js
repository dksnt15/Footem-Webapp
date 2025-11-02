import mongoose from 'mongoose'
import { type } from 'os'

const Reviewsschema = new mongoose.Schema(
    {
        reviewId: {
            type: String,
            required: true,
            unique: true,
        },
        turfId: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
        },
        createdAt: Date

    }
)

export const Rivews = mongoose.model("Rivews",Reviewsschema)
