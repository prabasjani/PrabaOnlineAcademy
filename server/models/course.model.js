import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        require: true
    },
    coursePrice: {
        type: String,
        require: true
    },
    courseImage: {
        type: String,
        require: true,
        default: 'https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg'
    },
    courseDescription: {
        type: String,
        require: true,
    },
    courseTopics: {
        type: String,
        require: true,
        default: []
    },
    courseVideos: {
        type: String,
        require: true,
        default: []
    },
}, {timestamps: true})

export const CourseModel = mongoose.model('course', CourseSchema)