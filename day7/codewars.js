// sum of digits
function digitalRoot(n) {
    // ...
    let sum = 0;
    let digit;
    
    if (Math.trunc(n / 10) == 0)
      {
        return n;
      }
    while (Math.trunc(n / 10) != 0)// || n % 10 != n)
      {
        digit = n % 10;
        sum = sum + digit;
        n = Math.trunc(n / 10);
      }// 3 + 2 + 
    sum = sum + n;// + 1 because the last digits to the left is not accepted in the loop
    return digitalRoot(sum);
    }