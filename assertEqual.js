// assertEqual Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) { // they must be exactly the same
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  } // If the assertion is false, the message is written to the console.
};

module.exports = assertEqual; // export the function from this module

