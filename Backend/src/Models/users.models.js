import mongoose from "mongoose";
import { type } from "os";

const userschem = new mongoose.Schema(
    {
        userId: {
            type: string,
            required:true,
            unique:true,
            
        },
        name: {
            type:string,
            required:true,
            
        },
        email: {
            type:string,
            required:true,
            unique:true,
            lowercase:true,
            
        },
        phone: {
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            unique:true,
        },
        role: {
            type:String,
            enum:["user","admin"],
            default:"user",
        },
        profileImage :{
            type:String,
        },
        createdAt: Date,


    }
)

export const User = mongoose.model("User",userschem)