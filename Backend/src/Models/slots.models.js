import mongoose from 'mongoose'
import { type } from 'os'

const Slotsschema = new mongoose.Schema(
    {
        slotID: {
            type: String,
            required: true,
            unique: true,
        },
        turfId: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        isBooked:{
            type: Boolean,
            default: false,
        }
    }
)

export const Slots = mongoose.model("Slots",Slotsschema)
