import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DataBase Connected!')
    } catch (error) {
        console.log('Error: ' +error.message)
    }
}