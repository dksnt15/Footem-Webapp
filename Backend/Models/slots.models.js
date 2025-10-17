import mongoose from 'mongoose'

const Slotsschema = new mongoose.Schema(
    {
        slotID: String,
        turfId: String,
        date: String,
        time: String,
        isBooked:Boolean
    }
)

export const Slots = mongoose.model("Slots",Slotsschema)
