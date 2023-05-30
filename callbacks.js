// Callback function example
const findWaldo = function(names, found) {
  names.forEach(function(name, index) {
    if (name === "Waldo") {
      found(index); // execute callback with index argument
    }
  });
};

// Callback function
const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};

// Test the findWaldo function
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// functions as objects && modular code
findWaldo(["Waldo", "meow"], actionWhenFound);



// Callback function example refactored with anonymous callback function
// const findWaldo = function(names, found) { // same line
//   names.forEach(function(name, index) { // same line
//     if (name === "Waldo") { // same line
//       found(index); // execute callback with index argument // same line
//     }
//   });
// };



// // Callback function
// const actionWhenFound = function(index) {
//   console.log(`Found Waldo at index ${index}!`);
// };

// // Test the findWaldo function
// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// Test the findWaldo function with an anonymous callback function
// findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
//   console.log(`Found Waldo at index ${index}!`);
//}); //actionWhenFound unnecessary

// the anon function is
// function(index) {
//   console.log(`Found Waldo at index ${index}!`);
// }




// I wanted to try smth else. Need to comment out everything else or get initializing error

// const findWaldo = function(names, found) {
//   names.forEach(function(name, index) {
//     if (name === "Waldo" || name === "Mario") {
//       found(name, index); // execute callback with name and index arguments
//     }
//   });
// };

// findWaldo(["Alice", "Bob", "Waldo", "Mario", "Winston"], function(name, index) {
//   console.log(`Found ${name} at index ${index}!`);
// });

// expected output
// Found Waldo at index 2!
// Found Mario at index 3!
