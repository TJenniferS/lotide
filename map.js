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

// // Test Case 1: Mapping array elements to their lengths
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word.length);
// const expected1 = [6, 7, 2, 5, 3];
// assertArraysEqual(results1, expected1);

// // Test Case 2: Mapping array elements to uppercase
// const results2 = map(words, word => word.toUpperCase());
// const expected2 = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];
// assertArraysEqual(results2, expected2);

// // Test Case 3: Mapping array elements to their first character
// const results3 = map(words, word => word[0]);
// const expected3 = ["g", "c", "t", "m", "t"];
// assertArraysEqual(results3, expected3);

// Test Cases
const words = ["ground", "control", "to", "major", "tom"];

// Test Case 1: Mapping array elements to their lengths
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);

// Test Case 2: Mapping array elements to uppercase
assertArraysEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Test Case 3: Mapping array elements to their first character
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]); //testing changes //