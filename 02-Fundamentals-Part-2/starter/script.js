'use strict';   //activated strict mode for the whole script
//strict mode needed to avoid bugs
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

//const interface = `Audio`;
//const private = 2123;
*/

/*
function logger() {
  console.log(`My name is Valeriu`);
}

logger(); //calling function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 5);
console.log(appleOrangeJuice);
*/

/*
//function declaration
function calcAge_1(birthYear) {
  const age = 2021 - birthYear;
  return age;
}

let myCurrentAge = calcAge_1(1999);
console.log(myCurrentAge);

//function expression
let calcAge_2 = function (birthYear) {
  return 2021 - birthYear;
}

console.log(calcAge_2(1999));

// Arrow function
let calcAge_3 = birthYear => 2021 - birthYear;
console.log(calcAge_3(1999));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1999, `Valeriu`));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 6;
}

function fruitProcessor(apples, oranges) {

  let applePieces = cutFruitPieces(apples);
  let orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;

}

console.log(fruitProcessor(3, 7));
*/

const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {

  const age = calcAge(birthYear);
  const retirement = 65 - age;
  // return retirement;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has retired already`;
  }
  //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1999, 'Valeriu'));
console.log(yearsUntilRetirement(1950, 'Adi'));


