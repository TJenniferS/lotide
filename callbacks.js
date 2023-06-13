// Helper Function: Check if a name is Waldo
const isWaldo = function(name) {
  return name === "Waldo";
};

// Main Function: Find Waldo in an array and execute a callback when found
const findWaldo = function(names, found) {
  names.forEach(function(name, index) {
    if (isWaldo(name)) {
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

// functions as objects and modular code
findWaldo(["Waldo", "meow"], actionWhenFound);

module.exports = findWaldo;
module.exports = actionWhenFound;