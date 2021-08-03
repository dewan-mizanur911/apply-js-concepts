function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('Is my number even :', isMyNumberEven);

const herNumber = 2211;
const isHerNumbserOdd = isOdd(herNumber);
console.log('Is her number odd :', isHerNumbserOdd);