const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
//test code middle
assertArraysEqual(middle([1]), []); // Empty array
assertArraysEqual(middle([1, 2]), []); // Empty array
assertArraysEqual(middle([1, 2, 3]), [2]); // Single middle element
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Single middle element
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Two middle elements
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Two middle elements

// Test Cases assert
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
// Test Cases eqArrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);