// Helper Function: Check if an array has an even length
const isEvenLength = function(array) {
  return array.length % 2 === 0;
};

// Main Function: Get the middle elements of an array
const middle = function(array) {
  const middleArray = [];
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return middleArray;
  }

  if (isEvenLength(array)) {
    middleArray.push(array[middleIndex - 1], array[middleIndex]);
  } else {
    middleArray.push(array[middleIndex]);
  }

  return middleArray;
};

module.exports = middle;
