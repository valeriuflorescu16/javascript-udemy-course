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

/*
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
*/

/*
const friend1 = `Michael`;
const friend2 = `Stephen`;
const friend3 = `Josh`;

const friends = [`Michael`, `Stephen`, `Josh`];
console.log(friends);

//const years = new Array(1991, 1984, 1999, 2020);
//console.log(years);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Joshua`;
console.log(friends);

const valeriu = [`Valeriu`, `Florescu`, 2021 - 1999, friends];
console.log(valeriu);
console.log(valeriu.length);

//Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
}
const years = new Array(1991, 1984, 1999, 2020);
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), age2, age3];
console.log(ages);
*/

/*
//add elements to array
const friends = [`Michael`, `Stephen`, `Josh`];
const newLength = friends.push(`Dan`);
console.log(friends);
console.log(newLength);

friends.unshift(`Vali`); //also returns the new length of array
console.log(friends);

//Remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); //first
console.log(friends);

const indexOfStephen = friends.indexOf(`Stephen`);
console.log(indexOfStephen);

friends.push(23);
console.log(friends.includes(`Stephen`));
console.log(friends.includes(`Vali`));
console.log(friends.includes(`23`));
console.log(friends.includes(23));


if (friends.includes(`Stephen`)) {
  console.log(`You have a friend called Stephen`);
}
*/


// Objects
const valeriu = {

  firstName: `Valeriu`,
  lastName: `Florescu`,
  age: 2021 - 1999,
  job: `Student`,
  friends: [`Vali`, `Josh`, `Dan`]

};
console.log(valeriu);
console.log(valeriu.lastName);
console.log(valeriu['lastName']);

const nameKey = `Name`;
console.log(valeriu['first' + nameKey]);
console.log(valeriu['last' + nameKey]);

const interestedIn = prompt(`What do you want to know about Valeriu? Choose between firstName, lastName, age, job and friends.`);
console.log(interestedIn);

if (valeriu[interestedIn]) {
  console.log(valeriu[interestedIn]);
} else {
  console.log(`Wrong request. Choose between firstName, lastName, age, job and friends.`);
}

valeriu.location = `United Kingdom`;
valeriu[`originCountry`] = `Romania`;
console.log(valeriu);


//Challenge
console.log(`${valeriu.firstName} has ${valeriu.friends.length} friends, and his best friend is ${valeriu.friends[1]}`);

