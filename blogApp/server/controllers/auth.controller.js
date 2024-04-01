// import User from "../models/user.model.js";
// import bcryptjs from 'bcryptjs';
// import { errorHandler } from "../utiles/error.js";
// import jwt from 'jsonwebtoken';

// export const signup = async (req, res, next) => {
//     // console.log(req.body);
//     try {
//         const { username, email, password } = req.body;

//         if (!username || !email || !password || username === '' || email === '' || password === '') {
//             // return res.status(400).json({message: 'all feild arerequired'});
//             next(errorHandler(400, 'All feilds are required'));
//         }

//         const hashedPassword = await bcryptjs.hash(password, 10);
//         const newUser = new User({
//             // username: username.toLowerCase(), not needed after es6 if the naming is the same
//             username,
//             email,
//             password: hashedPassword,

//         });
    
//         await newUser.save();
//         res.json('sign up successful');//this needs to change to include succes = true or false
//     } catch (err) {
//         // res.status(500).json({message: err.message});
//         next(err);
//     }
// };

// export const signin = async (req, res, next) => {
//     const { email, password } = req.body;
//     if (!email || !password || email === '' || password === '') {
//         return next(errorHandler(400, 'All feilds are required')); //return or no return ?
//     }
//     try {
//         const validUser = await User.findOne({ email });
//         if (!validUser) {
//             return next(errorHandler(404, 'User not found'));
//         }
//         const validPassword = await bcryptjs.compare(password, validUser.password);
//         if (!validPassword ) { //|| password == validUser.password
//             return next(errorHandler(400, 'User not found'));
//         }
//         //token (cookie) created (encrypted )based on a secret key
//         const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET,);// {expiresIn: '1d'},);
//         //to seperate password from valid user
//         const {password: pass, ...rest } = validUser._doc;
        
//         res.status(200).cookie('access_token', token, {
//             httpOnly: true,
//         }).json(rest);

//     } catch (err) {
//         next(err)
//     }
// }

// export const google = async (req, res, next) => {
//     const { username, email, googlePhotoUrl} = req.body;
//     try {
//         const user = await User.findOne({email});
//         if (user) {
//             const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
//             const {password, ...rest} = user._doc;
//             res.status(200).cookie('access_token', token, {
//                 httpOnly: true,
//             }).json(rest);
//         } else {
//             const generatedPassword = Math.random().toString(36).slice(-8);
//             const hashedPassword = await bcryptjs.hash(generatedPassword, 10);
//             const newUser = newUser({
//                 username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
//                 email,
//                 password: hashedPassword,
//                 profilePicture: googlePhotoUrl,

//             });
//             await newUser.save();
//             const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
//             const {password, ...rest} = newUser._doc;
//             res.status(200).cookie('access_token', token, {
//                 httpOnly: true,
//             }).json(rest);
//         }
//     } catch (err) {
//         next(err);
//     }
// };
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utiles/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(' ').join('') +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};