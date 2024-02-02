//async function fetchUserData () {}


const fetchUserData = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const {users} = await response.json();
        //console.log(facts.users);
/*
        
        const filteredString = processUserData(users);
        
*/
        const arr = processUserData(users);
        console.log("Processed Users:");
        console.log(arr[0]);
        //console.log(arr[1]);
        console.log("Total Age of Active Users: " + arr[1]);

        //console.log(filtered);
        // let n = filtered.length;
        // const {firstName, age} = filtered;
        // for (let i = 0; i < n; i++)
        // {
        //     console.log("- Name: " + {firstName} + ", Age: " + filtered[i].age);
        // }
        //console.log("Total Age of Active Users: " + summarizeAge(filtered));


        //const output = facts.filter(person => person.gender === "male");
        //console.log(output);
    }
    catch (err) {
        console.log(err);
    };
}

fetchUserData();
function summarizeAge(arr) {
    return arr.reduce((accumulator ,item) => {
        return accumulator += item;
      }, 0);
}
//let ages = 0;
function processUserData(users) {

    const filtered = users.filter((e)=>e.gender === 'male');
    const filteredFormat = filtered.map((ele) => "- Name: " + ele.firstName + " " + ele.lastName + ", age: " + ele.age) 
    const filteredAge = filtered.map((ele) => ele.age);
    const filteredString= filteredFormat.join("\n");
    //console.log(filteredAge);
    return [filteredString, summarizeAge(filteredAge)]; // string
/* another way
    const filtered = users.filter((e)=>e.gender === 'male');
    const arr = [];
    filtered.map((item) => {
        arr.push("Name: " + item.firstName + " " + item.lastName + ", age: " + item.age);
    })
*/
    //const output = users.filter(person => person.gender === "male");
    //return output;

/*
Object.filter = (obj, predicate) =>
  Object.fromEntries(Object.entries(obj).
                     filter(([key, value]) =>
                     predicate(value)));
 
let filtered = 
    Object.filter(users, user => 
                  user.gender === "male");
return filtered;
*/
/* require lodash module
const output = _.flow([
    Object.entries,
    arr => arr.filter(([key, value]) => value === 'male'),
    Object.fromEntries
  ])(users);
  return output;
  */
}

