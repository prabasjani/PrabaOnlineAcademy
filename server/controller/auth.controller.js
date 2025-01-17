import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserModel } from "../models/user.model.js"

export const registerStudent = async (req, res) => {
    const {username, emailAddress, password} = req.body

    try {
        const user = await UserModel.findOne({emailAddress})
        // Check if User is Already exist in DB
        if (user){
            return res.status(400).json({status: true, message: 'Student Already Exist!'})
        }
        // hasing the password
        const hashedPwd = await bcrypt.hash(password, 10)
        // Create new user in DB
        const newUser = UserModel({username, emailAddress, password: hashedPwd})
        await newUser.save()
        res.status(201).json({status: true, message: 'New Student Account Created!'})
    } catch (error) {
        res.status(500).json({status: false, message: `Error: ${error.message}`})
    }
}

export const login = async (req, res) => {
    const {emailAddress, password} = req.body
    
    try {
        const user = await UserModel.findOne({emailAddress})
        // Check if User is Already exist in DB
        if(!user){
            return res.status(404).json({status: false, message: 'Student Not Found!'})
        }
        // Verify the Password
        const verifyPwd = await bcrypt.compare(password, user.password)
        if(!verifyPwd){
            return res.status(401).json({status: false, message: 'Incorrect Password!'})
        }
        // Generate the Access token by using JWT, the payload of admin id
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.status(200).json({status: true, message: `Login Successfull! Welcome ${user.username}`,userID: user._id, token, role: user.role })
    } catch (error) {
        res.status(500).json({status: false, message: `Error: ${error.message}`})        
    }
}

export const currentUser = async (req, res) => {
    const {userID} = req.params
    
    try {
        const user = await UserModel.findById(userID)
        res.status(200).json({status: true, currentUser: user.username})
    } catch (error) {
        res.status(500).json({status: false, message: `Error: ${error.message}`})        
    }
}