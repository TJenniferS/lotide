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

