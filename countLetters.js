// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetters function
const countLetters = function(sentence) {
  const letterCount = {};

  for (const characters of sentence) {
    if (characters !== ' ') {
      if (letterCount[characters]) {
        letterCount[characters] += 1;
      } else {
        letterCount[characters] = 1;
      }
    }
  }

  return letterCount;
};

// Testing the countLetters function
const result = countLetters('lighthouse in the house');
assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['g'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['o'], 2);
assertEqual(result['u'], 2);
assertEqual(result['s'], 2);
assertEqual(result['e'], 3);
assertEqual(result['n'], 1);
