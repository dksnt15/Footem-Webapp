import mongoose from 'mongoose'

const Reviewsschema = new mongoose.Schema(
    {
        reviewId: String,
        turfId: String,
        userId: String,
        rating: Number,
        comment: String,
        createdAt: Date

    }
)

export const Rivews = mongoose.model("Rivews",Reviewsschema)
