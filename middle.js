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

// Function Implementation assertArraysEqual
const assertArraysEqual = function(arr1, arr2) {
  const assertionMessage = eqArrays(arr1, arr2) ? "✔️Assertion Passed" : "❌Assertion Failed";
  console.log(`${assertionMessage}: [${arr1}] === [${arr2}]`);
};




// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};



//actual function
const middle = function(array) {
  const middleArray = [];
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return middleArray;
  }

  if (length % 2 === 0) {
    middleArray.push(array[middleIndex - 1], array[middleIndex]);
  } else {
    middleArray.push(array[middleIndex]);
  }

  return middleArray;
};



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

//test code middle
assertArraysEqual(middle([1]), []); // Empty array
assertArraysEqual(middle([1, 2]), []); // Empty array
assertArraysEqual(middle([1, 2, 3]), [2]); // Single middle element
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Single middle element
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Two middle elements
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Two middle elements

