const eqArrays = require('./eqArrays'); // Require eqArrays module from this directory

// Function Implementation assertArraysEqual
const assertArraysEqual = function(arr1, arr2) {
  const assertionMessage = eqArrays(arr1, arr2) ? "✔️Assertion Passed" : "❌Assertion Failed";
  console.log(`${assertionMessage}: [${arr1}] === [${arr2}]`);
};

module.exports = assertArraysEqual;

