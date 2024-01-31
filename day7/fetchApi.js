//async function fetchUserData () {}


const fetchUserData = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const facts = await response.json();
        //console.log(facts.users);
        const filtered = processUserData(facts.users);
        console.log(filtered);
        console.log("Total Age of Active Users: " + summarizeAge(filtered));


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
        return accumulator += item.age;
      }, 0);
}
function processUserData(users) {

    const filtered = users.filter((e)=>e.gender === 'male');
    const arr = [];
    filtered.map(({firstName, age}) => arr.push({firstName, age}));
    return arr;
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

