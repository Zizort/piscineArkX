let numbers = [1, 2, 3, 6, 8, 6];
//Task 1 
//sum function that takes an array
//in case the array whithin scope
//let x = 0;
function sum(arr) // sum(...numbers)
{
    let x = 0;
    let y = arr.length; 
    for (let i = 0; i < y; i++)
    {
        x = x + arr[i];
    }
    console.log(x);     
}
sum(numbers);
//sum function with (...)
/*
function summ(...arr)
{
    let x = 0;
    let y = arr.length; 
    for (let i = 0; i < y; i++)
    {
        x = x + arr[i];
    }
    console.log(x);
}
summ(numbers);
*/
//-----------------------
function countEven(arr)
{
    let y = arr.length;
    let count = 0;
    for (let i = 0; i < y; i++)
    {
        if (arr[i] % 2 == 0)
        {
            count++;
        }
    }
    console.log(count);
}
countEven(numbers);

//-------------------------------
function double(arr)
{
    let y = arr.length;
    let temp;
    for (let i = 0; i < y; i++)
    {
        //print the array on console
        temp = arr[i].toString();
        process.stdout.write(temp);
        process.stdout.write(' ');
        // * 2 each element at a time.
        arr[i] = arr[i] * 2;
    }
    console.log("");
    for (let i = 0; i < y; i++)
    {
        // toString converts a number to string
        // se we can plug it into the print function that only takes strings
        temp = arr[i].toString();
        process.stdout.write(temp);
        process.stdout.write(' ');
    }
    console.log("");
}
double(numbers);
/****************************** */
//Task 2:
let socks = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //[1, 2, 1, 2, 1, 3, 2];
function search(arr, num)
{
    let l = arr.length;
    for (let i = 0; i < l; i++)
    {
        if (arr[i] == num)
        {
            return true;
        }
    }
    return false;
}
function sockMerchant(arr)
{
    let l = arr.length;
    let secondArray = [];
    let numberOfPairs = 0;
    let b;
    for (let i = 0; i < l - 1; i++)
    {
        b = 1;
        for (j = i + 1; j < l; j++)
        {
            if ((arr[i] == arr[j]) && search(secondArray, arr[i]) == false)
            {
                b++;
                secondArray.push(arr[i]);
            }

        }
        if (b > 1)
        {
            numberOfPairs = numberOfPairs + Math.trunc(b / 2); 
        } 
    }
    console.log(numberOfPairs);
}
sockMerchant(socks);