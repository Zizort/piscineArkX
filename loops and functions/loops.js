// factorial
//using loops
let num = 5;
if (num == 1)
{
    console.log(1);
    //console.log('h');
}
else if (num < 0)
{
    console.log("error"); 
}
else{
let j = num;
for (let i = 1; i <= num - 1; i++)// i=i+1
{
    j = j * (num - i);
}
console.log(j);
}
//using recursion
function factor(x)
{
    if (x == 0)
    {
        return 1;
    }
    else if (x < 0)
    {
        return -1;
    }
    else
    return x * factor(x - 1);
}
let y = factor(num);
if (y < 0)
{
    console.log("not defined");
}
else
{
    console.log(y);
}
/*-------------------------------------------*/
//How many digits?

let number = 123542;
let b = 0;
if (number == 0)
{
    console.log(1);    
}
else
{
    while (number >= 1 || number <= -1)
    // number != 0 does not work 
    // > 1 because number (int) / 10 (int) gives us a float
    // and = because incase we input 1.
    {
        number = number / 10;
        b++;    
    }
    console.log(b);
}
/*----------------------------------------------- */
//tree
//console.log() always prints a new line at the end
//so we use process.stdout.write('');
//or console.log('%s''%s', ' ', ' ');only with two strings?

let height = 4;
for (let i = 1; i <= height; i++)
{
    for (let z = i; z <= height - 1; z++)
    {
        process.stdout.write(' ');
    }
    for (let j = 1; j <= i; j++)
    {
        process.stdout.write('*');
    }
    for (let b = 1; b < i; b++)
    {
        process.stdout.write('*');

    }
    console.log("");//this for new line
}
for (let k = 0; k < height - 1; k++)// or k=1; k < height; k++
{
    process.stdout.write(' ');
}
console.log("|");
/*--------------------------------------------------------*/

// test
test
//dfdf