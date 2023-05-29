// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //When accessing property Jason on an empty object, JS will not throw an error. It will instead give us back undefined since the property does not exist on it.The second check (for Karima) expects undefined and will therefore actually pass! The first and last ones (for Fang and Jason) will fail complaining because their expected counts will be compared with undefined.

  // const countOnly = function(allItems, itemsToCount) {
  //   const results = {};
  
  //   for (const item of allItems) {
  //     console.log(item);
  //   }
  
  //   return results;
  // }

  //output
  // Karl
  // Salima
  // Agouhanna
  // Fang
  // Kavith
  // Jason
  // Salima
  // Fang
  // Joe

  for (const item of allItems) {
    if (itemsToCount[item]) { //only increment our count in results if item found in itemsToCount object
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

// Initial test case
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//can only compare primitive values
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
