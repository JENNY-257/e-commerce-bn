import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"buyer"
    },
    isActive:{
        type:String,
        default:true
    },
    verified: {
        type: Boolean,
        default: false,
      },

});

const User = mongoose.model('User', userSchema)
export  default User;