const mongoose = require("mongoose");
const User = require("./user");

mongoose.connect("mongodb://localhost:27017/testDB");
run();

async function fetchUsers() {
    try {
        const users = await User.find();
        //console.log(users);
        return users;
    } catch(err) {
        //console.log(err.message);
        return err.message;
    }
}
async function findbyNameEmail(Name, Email) {
    try {
        const user = await User.findOne({name: Name, email: Email});
        //console.log(user);
         return user; // this works
    } catch (err) {
        //console.log(err.message);
        return err.message;
    }
}
//update email by given name
async function updateEmail(Name, updatedEmail) {
    try {
        const user = await User.findOne({name: Name})
        if (!user) {
            return "user not found";
            //console.log("user not found");
        }
        user.email = updatedEmail;
        await user.save();
        //console.log(user);
        return user;

    } catch (err) {
        //console.log(err);
        return err.message;
    }
}
async function deleteDate(days) {
    try {
        let x = Date.now() - days * 24 * 60 * 60 * 1000;
        const y = await User.deleteMany({createdAt:{ $lt: x} });
        // console.log(`Deleted ${result.deletedCount} documents.`);
        return y.deletedCount;
    } catch (err) {
        throw err;
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
        // const x = new User({ name: "aziz", email: "aziz.ross@arkx.group", age: 25});
        // await x.save();
        // const y = new User({ name: "hamza", email: "hameza.ross@arkx.group", age: 200});
        // await y.save();
        await User.deleteOne({name: "tom"});
        const z = new User({ name: "tom", email: "tom.ross@arkx.group", age: 300, createdAt: Date.now() - 7 *24*60*60*1000});
        await z.save();
        
        

        const user1 = await findbyNameEmail("Mike Ross", "mike.ross@arkx.group");
        console.log(user1);

        const user2 = await updateEmail("Mike Ross", "mike.ross@arkx.group");
        console.log(user2);
        const count = await deleteDate(6);
        console.log(`Deleted ${count} documents.`);

        const users = await fetchUsers();
        console.log(users);
        // await user.save();
        // console.log(user);
    } catch(err) {
        console.log(err.message);
    }

}