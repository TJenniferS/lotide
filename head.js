// Define head Function Implementation
const head = function(array) {
  //start from first element
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

module.exports = head;
