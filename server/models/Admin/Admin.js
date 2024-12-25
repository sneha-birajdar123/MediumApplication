import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
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
        typeof: String,
        required : true
    }
})

const adminModel = mongoose.model("Admins", adminSchema, "admins")
export default adminModel