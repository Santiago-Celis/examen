import mongoose from "mongoose";

const Task = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },

    Description: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

export default mongoose.model('task', Task)