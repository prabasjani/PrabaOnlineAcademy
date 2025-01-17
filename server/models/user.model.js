import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    emailAddress: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: false,
        default: 'student'
    },
    password: {
        type: String,
        require: true,
    },
    
}, {timestamps: true})

export const UserModel = mongoose.model('user', UserSchema)