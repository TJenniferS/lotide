// base assertEqual Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌will always fail! Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Define tail Function Implementation
const tail = function(array) {
  // Check if the array has at least one element
  if (array.length <= 1) {
    return [];
  }

  // Return a new array containing elements from index 1 to the end after slicing off head
  return array.slice(1);
};

// Test Cases for tail function
//..assertEqual(tail([5, 6, 7]), [6, 7]);
//..assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);



///test (this works but feels clunky)
//let a = tail([5, 6, 7]);
//let b = [6, 7];
//assertEqual(a[0], b[0]);

// Check the returned array elements from new function defined as result of tail
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); //we only want 2 elements
assertEqual(result[0], "Lighthouse"); //first element will be "Lighthouse"
assertEqual(result[1], "Labs"); //2nd element is "Labs"

//Test case: Check original array

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); //not capturing return value since it's not what we're checking
assertEqual(words.length, 3); //original array should still have 3 elements

//Terminal returns
// ✔️Assertion Passed: 3 === 3