import mongoose from "mongoose";

const userschem = new mongoose.Schema(
    {
        userId: String,
        name: String,
        email: String,
        phone: String,
        password:String,
        role: String,
        profileImage : String,
        createdAt: Date,


    }
)

export const User = mongoose.model("User",userschem)