
import express from "express"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userModel from "../../models/Users/Users.js";

const router = express.Router()

router.get("/getallusers", async(req, res) => {
    try {
        let allUsers = await userModel.find({})
        console.log("Get all users");
        res.status(200).json(allUsers)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})


router.get("/getone/:id", async(req, res) => {
    try {
        let userId = req.params.id
        let getOneData = await userModel.find({_id: userId})
        res.status(200).json({user: getOneData})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.post("/register", async(req, res) => {
    try {
        let userData = req.body
        let hashPassword = await bcrypt.hash(userData.password, 10)
        userData.password = hashPassword
        await userModel.create(userData)
        res.status(201).json({msg: "user added successfully"})
    
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.put("/update/:id", async(req, res) => {
    try {
        let userId = req.params.id
        let userData = req.body
        await userModel.updateOne({_id: userId}, {$set: userData})
        res.status(200).json({msg: "User updated successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.delete("/deleteone/:id", async(req, res) => {
    try {
        let userId = req.params.id
        await userModel.deleteOne({_id: userId})
        res.status(200).json({msg: "User deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.delete("/deleteall", async(req, res) => {
    try {
        let userId = req.params.deleteall
        await userModel.deleteMany()
        res.status(200).json({msg: "Deleted all users"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

export default router