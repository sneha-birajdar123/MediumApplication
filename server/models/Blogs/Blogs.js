import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 2
    },
    description: {
        type: String,
        required: true,
        maxlength: 300,
        minlength: 5
    }, 
    content: {
        type: String, 
        required: true
    },
    conclusion: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    banner: {
        type: String, 
        required: false
    }, 
    image: {
        type: String,
        required: true
    }
})

let blogModel = mongoose.model("Blogs", blogsSchema, "blogs")
export default blogModel