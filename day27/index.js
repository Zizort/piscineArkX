const mongoose = require("mongoose");
const User = require("./user");

mongoose.connect("mongodb://localhost:27017/testDB");
run();

async function fetchUsers() {
    try {
        const users = await User.find();
        console.log(users);
    } catch(err) {
        console.log(err.message);
    }
}
async function findbyNameEmail(Name, Email) {
    try {
        const user = await User.findOne({name: Name, email: Email});
        console.log(user);
        // return user; this works
    } catch (err) {
        console.log(err.message);
    }
}
async function run() {
    try {
        //await User.deleteOne({name: "az"});
        const user = await User.findOne({email: "mike.ross@arkx.group"});
        if (user === null) {
           //delete everything else
            await User.deleteMany({name: "Mike Ross"})
            const user = new User({ name: "Mike Ross", email: "mike.ross@arkx.group", age: 30});
            await user.save();
        }
        
        
        await fetchUsers();
        await findbyNameEmail("Mike Ross", "mike.ross@arkx.group");

        // user.name = "az";
        // await user.save();
        // console.log(user);
    } catch(err) {
        console.log(err.message);
    }

}