function factorial(n){
    if(n == 0){ // f(0) = 1
        return 1;
    }
    return n * factorial(n-1); // recursion function
}

const myFactorial = factorial(5);
console.log(myFactorial);