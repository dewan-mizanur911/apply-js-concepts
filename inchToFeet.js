function inchesToFeet(inches){
    let feet = inches / 12;
    return feet;
}

let myInches = 132;
let feet = inchesToFeet(myInches);
console.log(feet);

let dadiInches = 144;
let dadiFeet = inchesToFeet(dadiInches);
console.log(dadiFeet);

// mile to kilometer
function mileToKilometer(miles){
    var km = miles * 1.603;
    return km;
}

let marathon = mileToKilometer(26.2);
console.log(marathon);