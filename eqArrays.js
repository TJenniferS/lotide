// Helper Function: Check if two arrays are equal
const arraysAreEqual = function(arr1, arr2) {
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

// Main Function: Compare two arrays for equality
const eqArrays = function(arr1, arr2) {
  return arraysAreEqual(arr1, arr2);
};

module.exports = eqArrays;
