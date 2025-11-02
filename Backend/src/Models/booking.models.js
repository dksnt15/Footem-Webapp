import mongoose from 'mongoose'

const Bookingschema = new mongoose.Schema(
    {
        bookingId: {
            type: String,
            required: true,
            unique: true,
        },
        userId: {
            type: String,
            required: true,
        },
        turfId: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        timeSlot: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'cancelled', 'completed'],
            default: 'pending',
        },
        paymentId: {
            type: String,
        },
        createdAt: Date

    }
)

export const Bookings = mongoose.model("Bookings",Bookingschema)
