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
