import Post from '../models/models.posts.js';
import mongoose from 'mongoose';


//get all workout
export const getAllPosts = async (req, res) => {
    try {
        const post = await Post.find({}).sort({createdAt: -1});
        if (!post) {
            return res.status(400).json({error: "nothing found"});//maybe this needs to be handled on the front end
        }
        res.status(200).json(post);
    } catch (err) {
        res.json({error: err.message});
    }
}

//get a single post
export const getOnePost = async (req, res) => {
    const { id } = req.params;
    //check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such post'});
    }

    const post = await Post.findById(id);

    if (!post) {
        return res.status(400).json({error: 'no such post'});
    }

    res.status(200).json(post);
}




//post a new post
export const createPost = async (req, res) => {
    
        const {title, text} = req.body;
        try {
            const post = new Post({title, text});
            await post.save();

            res.status(200).json(post);
    
        } catch (err) {
            res.status(400).json({error: 'err.message'})
        }
}

//delete a post
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'no such post'});
        }
        const result = await Post.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(400).json({error: 'no such post'});
        }
        res.status(200).json(result);

    } catch (err) {
        res.status(500).json({ mssg: 'error deleating post ', error: err.message});
    }
}

//update a post
export const updatePost = async (req, res) => {
    const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'no such post'});
        }
    const { title, text } = req.body;
    const result = await Post.updateOne({ _id: id }, { title, text });// this includes post.save();

        if (result.nModified === 0) {
            // If no documents were modified, the post might not exist or the data is the same
            return res.status(404).json({ message: 'Post not found or no changes made' });
        }

        // If the post was successfully updated, send a success response
        res.status(200).json({ message: 'Post updated successfully' });

    // await post.save();
}