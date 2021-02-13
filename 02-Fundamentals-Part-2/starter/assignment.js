'use strict';

/*
// average function to calculate the average for each team
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

//calculating the average using the average function
let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);

// function used to find out the winner team
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win by ${avgDolphins - avgKoalas} points on average`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win by ${avgKoalas - avgDolphins} points on average`;
  } else {
    return `No team wins`;
  }
}

console.log(checkWinner(averageDolphins, averageKoalas));

averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(averageDolphins, averageKoalas));
*/

/*
function calcTip(bill) {
  let x;
  if (bill >= 50 && bill <= 300) {
    x = (15 / 100) * bill;
  } else {
    x = (20 / 100) * bill;
  }
  return x;
}

console.log(calcTip(100));

const bills = new Array(125, 555, 44);

const t1 = calcTip(bills[0]);
const t2 = calcTip(bills[1]);
const t3 = calcTip(bills[2]);

const tips = new Array(t1, t2, t3);

const totals = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);

console.log(bills);
console.log(tips);
console.log(totals);
*/

//objects assignment
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};*/

/*
const john = {
  fullName: `John Smith`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();
//console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`Mark's BMI (${mark.bmi}) is higher than John's BMI (${john.bmi}).`);
} else if (john.bmi > mark.bmi) {
  console.log(`John's BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi}).`);
} else {
  console.log(`Mark's BMI (${mark.bmi}) is the same as John's BMI (${john.bmi}).`);
}
*/

/*

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcTip(bill) {
  let x;
  if (bill >= 50 && bill <= 300) {
    x = (15 / 100) * bill;
  } else {
    x = (20 / 100) * bill;
  }
  return x;
}

let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {

  let t = calcTip(bills[i]);
  tips.push(t);
  totals.push(bills[i] + t);

}

console.log(tips, totals);

function calcAverage(arr) {

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;

}

console.log(calcAverage(totals));
*/