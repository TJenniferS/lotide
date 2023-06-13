// middle function
const middle = function(array) {
  const middleArray = [];
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return middleArray;
  }

  if (length % 2 === 0) {
    middleArray.push(array[middleIndex - 1], array[middleIndex]);
  } else {
    middleArray.push(array[middleIndex]);
  }

  return middleArray;
};

module.exports = middle;
