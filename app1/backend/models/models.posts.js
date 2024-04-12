import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model('post', postSchema)

//add schema for author later
//here add created by: author