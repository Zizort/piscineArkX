function add(num1, num2) {
    //try {
      //  if (typeof(num1) !== 'number' && typeof(num2) !== 'number')
        //{
          //  throw new "only numbers!!";
        //}
        return num1 + num2;
    //}
    //catch(err) {
       // console.log(err);
    //}
}

function substract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
try{
    //...code for user input which function and the numbers...
    //...
    let x = 1;
    let y = 0;
    //... code for input choosen operation with sitch case or if statement...
    //if addition
    let addition = add(x,y);
    if(typeof addition !== 'number')
    {
        throw "only numbers allowed";
    } else{
        console.log("addition: " + x + " + " + y + " = " + addition);
    }
    //if substraction
    let substraction = substract(x,y);
    if(typeof substraction !== 'number')
    {
        throw "only numbers allowed";
    } else{
        console.log("substraction: " + x + " - " + y + " = " + substraction);
    }
    //if multiplication
    let multiplication = multiply(x,y);
    if(typeof multiplication !== 'number')
    {
        throw "only numbers allowed";
    } else{
        console.log("multiplication: " + x + " * " + y + " = " + multiplication);
    }
    // if division
    let division = divide(x,y);
    if(typeof division !== 'number' || y === 0)
    {
        throw "only numbers allowed and not possible to devide by 0";
    } else{
        console.log("division: " + x + " / " + y + " = " + division);
    }
    
    
}
catch(err) {
    console.log(err)
}
// it is okey if they are grouped in a single try catch because the main error which is !== number is
// affecting all the function