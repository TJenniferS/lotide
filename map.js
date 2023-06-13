// Function Implementation assertArraysEqual
const assertArraysEqual = function(arr1, arr2) {
  const assertionMessage = eqArrays(arr1, arr2) ? "✔️Assertion Passed" : "❌Assertion Failed";
  console.log(`${assertionMessage}: [${arr1}] === [${arr2}]`);
};

// Function Implementation eqArrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// Function Implementation map
const map = function(array, callback) {
  return array.map(callback);
};

// Test Cases
const words = ["ground", "control", "to", "major", "tom"];

// Test Case 1: Mapping array elements to their lengths
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);

// Test Case 2: Mapping array elements to uppercase
assertArraysEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Test Case 3: Mapping array elements to their first character
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]); //testing changes //

module.exports = map;