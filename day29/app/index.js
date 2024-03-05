const mongoose = require("mongoose");
//const uri = "mongodb+srv://abdlazizmoukdad:test123456@cluster0.nwe0uja.mongodb.net/?retryWrites=true&w=majority";
require('dotenv').config();
const uri = process.env.MONGODB_URI;

async function run() {
    try {
        await mongoose.connect(uri);
        console.log("connected to database");
    } catch (err) {
        console.log(err);
    }
}
run();