//Task 1
function factorial(n)
{
    if (n == 1)
    {
        //console.log(1);
        return 1;
    }
    else if (n < 0)
    {
        //console.log("error");
        return "error"; //different return types is possible but discouraged

    }
    else
    {
        let j = n;
        for (let i = 1; i <= n - 1; i++)
        {
            j = j * (n - i);
        }
        //console.log(j);
        return j;
    }
}
//factorial(5);
console.log(factorial(5))
//------------

function nDigits(number)
{
    let b = 0;
    if (number == 0)
    {
        //console.log(1);
        return 1;
    }
    while (number >= 1 || number <= -1)
    // number != 0 does not work 
    // > 1 because number (int) / 10 (int) gives us a float
    // and = because in case we input 1.
    {
        number = number / 10;
        b++;    
    }
    //console.log(b);
    return b;
}
console.log(nDigits(-123));
//---------------------------------------------
function numberToDay(number)
{
    //break should not be needed because return breaks the function
    switch (number) 
    {
        case 1:
            //console.log("Sunday");
            return "Sunday";
            break;
        case 2:
            return "Monday";
            break;
        case 3:
            
            return "Tuesday";
            //break;
        case 4:
            return "Wednsday";
            break;
        case 5:
            return "Thursday";
            break;
        case 6: 
            return "Friday";
            break;
        case 7:
            return "Saturday";
            break;
        default:
            return "could not find day";    
    }
}
console.log(numberToDay(3));
//----------------------------------
function max(a, b, c)
{
    const arr = [a, b, c];
    let max = arr[0];
    for (let i = 1; i < 3; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;
}
console.log(max(1,2,3));
// or using the arguments object
function maxx(a, b, c)
{
    let max = arguments[0];
    for (let i = 1; i < 3; i++) // or i < arguments.length
    {
        if (arguments[i] > max)
        {
            max = arguments[i];
        }
    }
    return max;
}
console.log(maxx(1,2,3));
//----------------------------------------

function myGrade(score)
{
    if (score <= 100 && score > 0)
    {
        if (score > 85)
        {
            return 'A';
        }
        else if (score <= 85 && score > 70)
        {
            return 'B';
        }
        else if (score <= 70 && score > 55)
        {
            return 'c';
        }
        else if (score <= 55 && score > 40)
        {
            return 'D';
        }
        else if (score <= 40 && score > 15)
        {
            return 'E';
        }
        else
        {
            return 'F';
        }
    }
}
console.log(myGrade(83));
/****************************************** */
//Task 2

function combinator(n, p)
{
    return factorial(n) / (factorial(p) * factorial(n - p));
}
console.log(combinator(5, 2));


/********************************** */
//Task 3

function calculator(x, op, y)
{
    switch (op)
    {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            return x / y;
            break;
        case '%':
            return x % y;
            break;
        case 'c':
            return combinator(x, y);
            break;
        default:
            return "operation not available";                        
    }
}
console.log(calculator(5, 'c', 2));
console.log(calculator(5, '/', 2));