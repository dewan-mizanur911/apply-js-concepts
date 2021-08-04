// odd even function
function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

var myNumberOdd = isOdd(3);
console.log('My number is Odd?', myNumberOdd);
var myNumberEven = isEven(3);
console.log('My number is Even?', myNumberEven);

// Leap Year function
function leapYear(year){
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return 'This is a leap year';
    }
    return 'This is not a leap year';
}
let currentYear = 2021;
let myYear = leapYear(currentYear);
console.log(currentYear, myYear);

// Inch to feet function
function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}
let myHeight = inchToFeet(72);
console.log('My height is', myHeight, 'feet');

// Factorial using for loop by increment
function getFactorialIncrement(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){ 
        factorial = factorial * i;
    }
    return factorial;
}
let myFactorial = getFactorialIncrement(5);
console.log('My number factorial by increment is :', myFactorial);

// Factoria using for loop by decrement 
function getFactorialDecrement(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}
let myFactorialDecrement = getFactorialDecrement(6);
console.log('My number factorial by decrement is :', myFactorialDecrement);

// Factorial function using while loop
function factorialWhile(number){
    let i = 1;
    let factorial = 1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
let whileNumber = 7;
let myFactorialWhile = factorialWhile(whileNumber);
console.log('The factorial of', whileNumber, 'is' ,myFactorialWhile);

// Factorial recursion using method f(n) = n * f(n-1)
function factorial(number){
    if(number == 0){
        return 1;
    }
    return number * factorial(number -1);
}
let recursiveNumber = 8;
let recursiveFactorial = factorial(recursiveNumber);
console.log('The recursive factorial of', recursiveNumber, 'is', recursiveFactorial);