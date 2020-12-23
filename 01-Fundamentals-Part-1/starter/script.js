/* let js = "amazing";
console.log(32 + 312 + 42);

console.log("Jonas");
console.log(23);

let firstName = "Valeriu";  //declaring a variable

console.log(firstName);
console.log(firstName);
console.log(firstName);

let x = 27;
console.log(x);

let myFirstJob = "Concierge";
let myCurrentJob = "Student";

console.log(myFirstJob);
console.log(myCurrentJob);

let valeriuIsSmart = true;
console.log(valeriuIsSmart);
console.log(typeof valeriuIsSmart);
console.log(typeof 30);
console.log(typeof "Salutare");

valeriuIsSmart = "Yes, that is very true bro";
console.log(valeriuIsSmart);
console.log(typeof valeriuIsSmart);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);
console.log(year);
console.log(typeof null);


let age = 20;
age = 21;

const birthYear = 1999;
var job = "Programmer";
job = "Software Engineer";
console.log(job);

const now = 2020;
const ageJack = now - 1998;
const ageEmma = now - 1999;

console.log(ageJack, ageEmma);
console.log(ageJack * 2, ageJack / 10, 2 ** 3);  // ** power of ..

const firstName = "Valeriu";
const lastName = "Florescu";
console.log(firstName + ' ' + lastName);
//operators
let x = 69 + 420;
x += 10;
x *= 2;
x++;
console.log(x);

console.log(ageJack > ageEmma);
console.log(ageEmma >= 22);

const isSheAnAdult = ageEmma >= 18; */
/*
let x, y;
x = y = 25 - 10 - 5; // due to precedence, x = 10, y = 10; - has higher precedence than assignment
console.log(x, y);

const firstName = 'Valeriu';
const job = 'programmer';
const birthYear = 1999;
const year = 2020;

const valeriu = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(valeriu);

const valeriuNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(valeriuNew);    // use ` ` for all strings instead of "" or '';

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`); */

/*const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`He can start driving 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`He has to wait ${yearsLeft} years to start driving. 🏎`);  // if/else = control structure
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// type conversion
const inputYear = '1999';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Valeriu'));
console.log(typeof (NaN));
console.log(String(21), 21);

// type coercion
console.log('I am ' + 21 + ' years old.');
console.log('I am ' + String(21) + ' years old');

console.log('23' - '10' - 5);
console.log('23' + 10 + 5);
console.log('23' * '2');
console.log('46' / '2');
console.log('23' > '21');



// 5 falsy values: NaN, null, undefined, 0, ''

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(23));

const money = 100;
if (money) {   // if money = 0 which is a falsy value
  console.log("Don't spend it all");
} else {
  console.log("get a job");
}

let height = 5;
if (height) {
  console.log("Height is defined");
} else {
  console.log("height is undefined");
}


const age = 18;
if (age === 18) console.log("adult");

// == performs type coercion; === doesn't

let myAge = '21';
if (myAge === 21) console.log("strict");
if (myAge == 21) console.log("loose");

const favourite = Number(prompt("What's your fav number?"));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 420) {
  console.log("nice");
} else if (favourite === 419) {
  console.log("Not nice");
} else {
  console.log("not nice at all");
}

if (favourite !== 420) console.log("hello");



const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasGoodVision || hasDriversLicense);
console.log(!hasDriversLicense);

const isTired = false;
const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

console.log(hasDriversLicense && hasGoodVision && isTired);
*/

const day = `thursday`;

switch (day) {    //day === monday
  case `monday`:
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;

  case `tuesday`:
    console.log(`Prepare theory videos`);
    break;

  case `wednesday`:
  case `thursday`:
    console.log(`Write code examples`);
    break;

  case `friday`:
    console.log(`I record videos`);
    break;

  case `saturday`:
  case `sunday`:
    console.log(`enjoy weekend`);
    break;

  default:
    console.log(`not valid day`);
}

if (day === `monday`) {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === `tuesday`) {
  console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
  console.log(`Write code examples`);
} else if (day === `friday`) {
  console.log(`I record videos`);
} else if (day === `saturday` || day === `sunday`) {
  console.log(`enjoy weekend`);
} else {
  console.log(`not valid day`);
}

console.log('push git');

