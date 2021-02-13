// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = `90`;
if (x === 23) console.log(23);
console.log(x);

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

function calcTempAmplitude(temps) {
  let max = maxValue(temps);
  let min = minValue(temps);
  let amplitude = max - min;
  return amplitude;
}

function maxValue(temps) {
  let max = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof max !== `number`) continue;
    if (temps[i] > max) {
      max = temps[i];
    }
  }
  return max;
}

function minValue(temps) {
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof min !== `number`) continue;
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  return min;
}

let tempAmp = calcTempAmplitude(temperatures);

console.log(tempAmp);

function calcTempAmplitudeNew(t1, t2) {
  const t3 = t1.concat(t2);
  let max = maxValue(t3);
  let min = minValue(t3);

  let amplitude = max - min;
  return amplitude;
}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius:"),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin);
