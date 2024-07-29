import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: "islamabad"

    },
}, { timestamps: true });
const users = mongoose.model('User', userschema)
export default users;