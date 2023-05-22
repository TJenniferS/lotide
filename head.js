//base assertEqual Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

/// Prior Test Code
//assertEqual("Lighthouse Labs", "Bootcamp"); // Non-identical strings
//assertEqual("meow", "meow"); // Identical strings
//assertEqual(10, 10); // Identical numbers
//assertEqual(32, 9); // Non-identical numbers
//assertEqual("meow", "Meow"); // Similar strings


// Define head Function Implementation
const head = function(array) {
  //start from first element
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

// Test cases for head function
assertEqual(head([5, 6, 7]), 5); //yields head 0
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //yields head 0
assertEqual(head([602]), 602); //yields the only one element as its head
assertEqual(head(["meow"]), "meow"); //yields the only one element as its head
assertEqual(head([]), undefined); //yields undefined as it's empty
