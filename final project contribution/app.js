const express = require('express');
const app = express();
const cors = require('cors');// font end app will be in local host 3000 thats why we need cors
const { hashSync, compareSync, hash , compare} = require('bcrypt');// for password encryption
const UserModel = require('./config/database');
const jwt = require('jsonwebtoken');
const passport = require('passport');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(passport.initialize());

require('./config/passport')

app.post('/register', async (req, res) => {
    try {
        const user = new UserModel({
            username: req.body.username,
            password: await hash(req.body.password, 10)
        })

        await user.save();
            
            res.send({
                success: true,
                message: "User created successfully.",
                user: {
                    id: user._id,
                    username: user.username
                }})
    }
    catch(err) {
        res.send({
            success: false,
            message: "Something went wrong",
            error: err
        })
    }
});

app.post('/login', async (req, res) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
            //No user found
            if (!user) {
                return res.status(401).send({
                    success: false,
                    message: "Could not find the user."
                })
            }

            //Incorrect password
            if ( ! await compare(req.body.password, user.password)) {
                return res.status(401).send({
                    success: false,
                    message: "Incorrect password"
                })
            }

            const payload = {
                username: user.username,
                id: user._id
            }

            const token = jwt.sign(payload, "Random string", { expiresIn: "1d" })

            return res.status(200).send({
                success: true,
                message: "Logged in successfully!",
                token: "Bearer " + token
            })
        } catch (err) {
            res.send({
                success: false,
                message: "Something went wrong",
                error: err
            })
        }        
})

app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).send({
        success: true,
        user: {
            id: req.user._id,
            username: req.user.username,
        }
    })
})

app.listen(5000, () => console.log("Listening to port 5000"));