function factorial(n){
    if(n == 0){ // f(0) = 1 called stopping function
        return 1;
    }
    return n * factorial(n-1); // recursion function
}

const myFactorial = factorial(5);
console.log(myFactorial);

let mySql = ['name', 'address', 'homeland'];
console.log(mySql);