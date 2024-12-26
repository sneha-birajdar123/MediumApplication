import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false, 
        maxlength: 250,
        minlength: 10
    },
    dateOfBirth: {
            type: Date,
            required: true
    },
    followers: {
        type: Number,
        required: true
    },
    following: {
        type: Number,
        required: true
    },
    profilePicture: {
        type: String,
        required: false
    },
    banner: {
        type: String,
        required: false
    }
})

const userModel = mongoose.model("Users", userSchema, "users")
export default userModel