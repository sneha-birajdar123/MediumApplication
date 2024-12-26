import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import blogModel from "../../models/Blogs/Blogs.js"
import userModel from "../../models/Users/Users.js"

const router = express.Router()

router.get("/getallblogs", async (req, res) => {
    try {
        console.log("get all blogs");

        let allBlogs = await blogModel.find({})
        res.status(200).json(allBlogs)

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})



router.get("/getone/:id", async (req, res) => {
    try {
        let blogId = req.params.id
        let getOneBlog = await blogModel.find({ _id: blogId })
        res.status(200).json(getOneBlog)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})



router.post("/register", async (req, res) => {
    try {
        let blogData = req.body
        await blogModel.create(blogData)
        res.status(201).json({ msg: "blog added successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})




router.put("/update/:id", async (req, res) => {
    try {
        let blogId = req.params.id
        let blogData = req.body
        await blogModel.updateOne({ _id: blogId }, { $set: blogData })
        res.status(200).json({ msg: "Blog updated successfully" })
        console.log("add register");
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})

router.delete("/deleteoneBlog/:id", async (req, res) => {
    try {

        let blogId = req.params.id
        await blogModel.deleteOne({ _id: blogId })
        console.log("delete blog");
        res.status(200).json({ msg: "Blog deleted successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})





router.delete("/deleteall", async (req, res) => {
    try {
        let blogId = req.params.deleteall
        await blogModel.deleteMany()
        res.status(200).json({ msg: "Deleted all blogs" })
        console.log("delete all blogs");

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})

export default router