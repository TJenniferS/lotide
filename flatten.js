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

// Function Implementation flatten
const flatten = function(arr) {
  const flattened = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      flattened.push(...item);
    } else {
      flattened.push(item);
    }
  }

  return flattened;
};

// Test Case for flatten
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
