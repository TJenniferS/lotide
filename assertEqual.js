// Helper Function: Check if values are equal
const areEqual = function(actual, expected) {
  return actual === expected;
};

// Main Function: Assert equality of values
const assertEqual = function(actual, expected) {
  if (areEqual(actual, expected)) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
