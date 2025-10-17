import mongoose from 'mongoose'

const Bookingschema = new mongoose.Schema(
    {
        bookingId: String,
        userId: String,
        turfId: String,
        date: String,
        timeSlot: String,
        status: String,
        paymentId: String,
        createdAt: Date

    }
)

export const Bookings = mongoose.model("Bookings",Bookingschema)
