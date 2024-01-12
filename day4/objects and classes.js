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
        const parts = value.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
};
console.log(Person.fullName)

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
function mostOccurred()
{

}





