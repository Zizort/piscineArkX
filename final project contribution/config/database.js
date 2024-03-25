const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce');

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;