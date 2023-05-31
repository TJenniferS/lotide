const eqArrays = (arr1, arr2) => {
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

const assertArraysEqual = (arr1, arr2) => {
  const assertionMessage = eqArrays(arr1, arr2) ? "✔️Assertion Passed" : "❌Assertion Failed";
  console.log(`${assertionMessage}: [${arr1}] === [${arr2}]`);
};

const takeUntil = (array, callback) => {
  const result = [];

  for (const item of array) {
    if (callback(item)) {
      break; // the function will exit the loop as soon as the callback returns true, ensuring that it stops processing the array elements beyond that point
    }

    result.push(item);
  }

  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expected1 = [1, 2, 5, 7, 2];
assertArraysEqual(takeUntil(data1, x => x < 0), expected1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const expected2 = ["I've", "been", "to", "Hollywood"];
assertArraysEqual(takeUntil(data2, x => x === ','), expected2);

// Does your takeUntil function need to loop through the entire array once the callback returns a truthy value? If not, how can we make it stop?

// can use break