///https://developer.mozilla.org/en-US/docs/Web/API/console/assert MDN article

//assert(assertion, obj1)
//assert(assertion, obj1, obj2)
//assert(assertion, obj1, obj2, /* … ,*/ objN)

//assert(assertion, msg)
//assert(assertion, msg, subst1)
//assert(assertion, msg, subst1, /* … ,*/ substN)

//console.assert()

//assertion
//Any boolean expression. If the assertion is false, the message is written to the console.

//obj1 … objN
//A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.

//msg
//A JavaScript string containing zero or more substitution strings.

//subst1 … substN
//JavaScript objects with which to replace substitution strings within msg. This parameter gives you additional control over the format of the output.
///

///example code
//const errorMsg = "the # is not even";
//for (let number = 2; number <= 5; number++) {
//  console.log(`the # is ${number}`);
//  console.assert(number % 2 === 0, "%o", { number, errorMsg });
//}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
///

///
//Function Implementation skeleton code from LHL

//const assertEqual = function(actual, expected) {

//};

//Test Code
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
///

///Actual
// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Code
// assertEqual("Lighthouse Labs", "Bootcamp"); // Non-identical strings
// assertEqual("meow", "meow"); // Identical strings
// assertEqual(10, 10); // Identical numbers
// assertEqual(32, 9); // Non-identical numbers
// assertEqual("meow", "Meow"); // Similar strings

//simply run `node filename.js` in terminal

module.exports = assertEqual; // export the function from this module
