import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utiles/error.js";
import jwt from 'jsonwebtoken';

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
        res.json('sign up successful');//this needs to change to include succes = true or false
    } catch (err) {
        // res.status(500).json({message: err.message});
        next(err);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === '' || password === '') {
        return next(errorHandler(400, 'All feilds are required')); //return or no return ?
    }
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, 'User not found'));
        }
        const validPassword = await bcryptjs.compare(password, validUser.password);
        if (!validPassword ) { //|| password == validUser.password
            return next(errorHandler(400, 'User not found'));
        }
        //token (cookie) created (encrypted )based on a secret key
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET,);// {expiresIn: '1d'},);
        //to seperate password from valid user
        const {password: pass, ...rest } = validUser._doc;
        
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest);

    } catch (err) {
        next(err)
    }
}