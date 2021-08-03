// increment factorial
/* 
function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);
*/

// Decrement factorial
function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(number >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);

// for loop reverse
function getFactorial(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

let yFactorial = getFactorial(6);
console.log(yFactorial);