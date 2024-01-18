//task 1
const Person = {
    firstname: "Abdelaziz",
    lastname: "Moukdad",
    age: 25,
    get fullName() {
        return Person.firstname + " " + Person.lastname; // or this.firstname...
    },
    set fullName(name)
    {
        //split a string into first and last
        const parts = name.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
};
Person.fullName = "aziz mouk"; // set the values of the  2 keys
console.log(Person.fullName); // get the values of the 2 keys separated by space

//********************************** */
//task 2:

class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    compareAge(x)
    {
        if (this.age == x.age)
        {
            return x.name + " is the same age as me.";
        } 
        else if (this.age < x.age)
        {
            return x.name + " is older than me."
        }
        else
        {
            return x.name + " is younger than me."
        }
        
    }
}
p1 = new person("Samuel", 24);
p2 = new person("Joel", 36);
p3 = new person("Lily", 24);
console.log(p1.compareAge(p2));
/************************************************** */
//task 3
// using objects
// another array can be used instead of an object
let array = [1, 2, 2, 3, 3, 4, 1, 2];
function mostOccurred(arr)
{
    const l = arr.length;
    const object = {};
    for (let i = 0; i < l - 1; i++)
    {
        // const indice = i;
        object[`entry${i}`] = 1; // object.'entry${i}' does not work
        // console.log(object);
        for (let j = i + 1; j < l; j++)
        {
            if (arr[i] == arr[j])
            {
                object[`entry${i}`]++;
            }
        }
    }
    // console.log(object.entry0); this syntax works
    let max = 1;
    let pos = 0;
    for (let x = 0; x < l - 1; x++)
    {
        if (object[`entry${x}`] > max)
        {
            max = object[`entry${x}`];
            pos = x;
        }
    }
    // return the element most occurred 
    return arr[pos];
}
console.log(mostOccurred(array));




