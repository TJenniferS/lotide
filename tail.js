//Define tail Function Implementation
const tail = function(array) {
  // Check if the array has at least one element
  if (array.length <= 1) {
    return [];
  }

  // Return a new array containing elements from index 1 to the end after slicing off head
  return array.slice(1);
};

module.exports = tail;
