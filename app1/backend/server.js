import express from 'express';
import dotenv from 'dotenv';
import postRouter from './routes/routes.posts.js'
import mongoose, { mongo } from 'mongoose';


dotenv.config();

const app = express();
//get all blog posts
//post one blog
//get post by id
//delete a postby id
//patch update post by id

//middleware
app.use(express.json()); // to read data in the req object
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


app.use('/api/posts', postRouter);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //you can put app.listen here
        console.log('conected to mongodb');
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(process.env.PORT, () => {
    console.log('listening on port ', process.env.PORT);
});