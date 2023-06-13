// eqArrays function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// assertArraysEqual function
const assertArraysEqual = function(arr1, arr2) {
  const assertionMessage = eqArrays(arr1, arr2) ? "✔️ Assertion Passed" : "❌ Assertion Failed";
  console.log(`${assertionMessage}: [${arr1}] === [${arr2}]`);
};

// letterPositions function
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }

  return results;
};

// Test tiny string
const testString = "hello";
const expectedPositions = { h: [0], e: [1], l: [2, 3], o: [4] };
assertArraysEqual(letterPositions(testString)['h'], expectedPositions['h']);
assertArraysEqual(letterPositions(testString)['e'], expectedPositions['e']);
assertArraysEqual(letterPositions(testString)['l'], expectedPositions['l']);
assertArraysEqual(letterPositions(testString)['o'], expectedPositions['o']);

module.exports = letterPositions;