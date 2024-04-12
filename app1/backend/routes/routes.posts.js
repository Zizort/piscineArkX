import express from 'express'
import { createPost, deletePost, getAllPosts, getOnePost, updatePost } from '../controllers/controllers.post.js';
// import Post from '../models/models.posts.js'

const router = express.Router();

//get all posts
router.get('/', getAllPosts);

//get a single post
router.get('/:id', getOnePost);

//create a post
router.post('/', createPost);

//delete a post
router.delete('/:id', deletePost);
//update a post
router.patch('/:id', updatePost);

export default router;