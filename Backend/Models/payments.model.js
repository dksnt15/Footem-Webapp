import mongoose from 'mongoose'

const Paymentschema = new mongoose.Schema(
    {
        paymentId: String,
        bookingId: String,
        userId: String,
        amont: Number,
        currency: String,
        razorpayOrderId: String,
        razorpayPaymentId: String,
        razorpaySignature: String,
        status: String,
        createdAt: Date

    }
)

export const Payments = mongoose.model("Payments",Paymentschema)
