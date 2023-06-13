// assertEqual function
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKey function
const findKey = (object, callback) => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (callback(object[key])) {
        return key;
      }
    }
  }
  return undefined;
};

// Test cases
const restaurantRatings = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(restaurantRatings, x => x.stars === 2), "noma");
assertEqual(findKey(restaurantRatings, x => x.stars === 4), undefined);

module.exports = findKey;