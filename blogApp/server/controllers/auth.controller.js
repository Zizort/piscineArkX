import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utiles/error.js";

export const signup = async (req, res, next) => {
    // console.log(req.body);
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password || username === '' || email === '' || password === '') {
            // return res.status(400).json({message: 'all feild arerequired'});
            next(errorHandler(400, 'All feilds are required'));
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({
            // username: username.toLowerCase(), not needed after es6 if the naming is the same
            username,
            email,
            password: hashedPassword,

        });
    
        await newUser.save();
        res.json('sign up successful');
    } catch (err) {
        // res.status(500).json({message: err.message});
        next(err);
    }
}