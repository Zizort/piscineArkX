const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
//.insertOne or .insertMany already returns a promise so no need to return it manually
function insert() {
  return new Promise((resolve, reject) => {
    // let names = ["aziz", "kate", "ok"];
    // let age = 24;
    collection
    .insertOne({ name: "aziz", age: 25 })
    .then((user) => resolve("User Created Successfully: ", user))
    .catch((error) => reject("Error: ", error));
  })
}
function inserTmany() {
  return new Promise((resolve, reject) => {
    // let names = ["aziz", "kate", "ok"];
    // let age = 24;
    collection
    .insertMany([{ 'name': "aziz", 'age': 25 }, { 'name': "hamza", 'age': 200 }, { 'name': "Mohammed", 'age': 300 }])
    .then((user) => resolve("User Created Successfully: ", user))
    .catch((error) => reject("Error: ", error));
  })
}


client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log("Error: ", error));
  
const db = client.db('mydb');
const collection = db.collection('users');
// let names = ["aziz", "kate", "ok"];
// let age = 24;
// for (let i = 0; i < 3; i++) {
//   collection
//   .insertOne({ name: names[i], age: age + i })
//   .then((user) => console.log("User Created Successfully: ", user))
//   .catch((error) => console.log("Error: ", error));
// }
async function run() {
  try {
    //await insert();
    await inserTmany();
    let cursor = collection.find();

  for await (const doc of cursor) {
    console.log(doc);
  }
  }
  catch (error) {
    console.log(error);
  }
  //another simple way to retrieve all.
  /*
  can be nested in a function that return promise
  collection
    .find().toArray()
    .then((user) => console.log(user))
    .catch((error) => {console.log(error)});

    */
  // insert many
  /*
  collection
    .insertMany({}, {})
    .then((user) => {console.log("message")})
    .catch((err)=> {console.log(err)});
  */
}
run();

//another way -------------------------------------------------------
/*
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "mydb";

async function insertOne(collection) {
  try {
    const result = await collection.insertOne({ name: "aziz", age: 25 });
    console.log("User Created Successfully: ", result.ops[0]);
  } catch (error) {
    console.error("Error: ", error);
  }
}

async function insertMany(collection) {
  try {
    const result = await collection.insertMany([
      { name: "aziz", age: 25 },
      { name: "hamza", age: 200 },
      { name: "Mohammed", age: 300 }
    ]);
    console.log("Users Created Successfully: ", result.ops);
  } catch (error) {
    console.error("Error: ", error);
  }
}

async function retrieveAll(collection) {
  try {
    const cursor = collection.find();
    await cursor.forEach(doc => console.log(doc));
  } catch (error) {
    console.error(error);
  }
}

async function run() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected to the database");

    const db = client.db(dbName);
    const collection = db.collection("users");

    // Insert operations
    await insertOne(collection);
    await insertMany(collection);

    // Retrieve operation
    await retrieveAll(collection);
  } catch (error) {
    console.error("Error: ", error);
  } finally {
    await client.close();
    console.log("Disconnected from the database");
  }
}
run();
*/

