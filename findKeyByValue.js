// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKeyByValue function
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (object[key] === value) {
        return key;
      }
    }
  }
  return undefined;
};

// Test cases
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
