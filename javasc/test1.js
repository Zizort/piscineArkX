let firstName = "Abdelaziz";
let lastName = "Moukdad";
const pi = 3.14;
let radius = 3;
let favoriteSuperhero = "Spider-Man";
let favoriteQuote = "An apple a day keeps the doctor away.";

let fullName = firstName + " " + lastName;

let areaCircle = pi * radius**2;
let perimeter = 2 * pi * radius;
let motivation = "A wise man named " + favoriteSuperhero + ":" + " \"" + favoriteQuote + "\"";

//swaping variables
let a = 3;
let b = 10;
let temp;
temp = a;
a = b;
b = temp;
console.log("After swaping: a = ", a, " and b = ", b);
// even or odd
let number = 3;
if (number % 2 == 0)
{
    console.log("even");
} 
else 
{
    console.log("odd");
}
// switch case day
let day = 4;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednsday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6: 
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("could not find day");      
}
// maximum
let h = -15;
let p = 6;
let z = 2.6;

const arr = [h, p, z];
let max = arr[0];
for (let i = 1; i < 3; i++)
{
    if (arr[i] > max)
    {
        max = arr[i];
    }
}
console.log(max);

// The teacher

let score = 83;
if (score <= 100 && score > 0)
{
    if (score > 85)
    {
        console.log('A');
    }
    else if (score <= 85 && score > 70)
    {
        console.log('B');
    }
    else if (score <= 70 && score > 55)
    {
        console.log('C');
    }
    else if (score <= 55 && score > 40)
    {
        console.log('D');
    }
    else if (score <= 40 && score > 15)
    {
        console.log('E');
    }
    else
    {
        console.log('F');
    }
}





