# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @tjsmr/lotide`

**Require it:**

`const _ = require('@tjsmr/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`



## Documentation

The following javascript functions are currently implemented:

# `assertArraysEqual(arr1, arr2)`
- Description: Compares two arrays and logs an assertion message indicating whether they are equal or not.

- Parameters:
  - `arr1` (Array): The first array to compare.
  - `arr2` (Array): The second array to compare.
- Returns: `Passed` if the arrays are equal, `Failed` otherwise using `node assertArraysEqualTest.js`; see description for use.


# `assertEqual(actual, expected)`
- Description: Compares two values and logs an assertion message indicating whether they are equal or not.

- Parameters:
  - `actual` (Any): The actual value to compare.
  - `expected` (Any): The expected value to compare.
- Returns: `Passed` if the strings or integers are equal, `Failed` otherwise using `node assertEqualTest.js`; see description for use.


# `assertObjectsEqual(actual, expected)`
- Description: Compares two objects and logs an assertion message indicating whether they are equal or not.

- Parameters:
  - `actual` (Object): The actual object to compare.
  - `expected` (Object): The expected object to compare.
- Returns: `Passed` if the objects are equal, `Failed` otherwise; see description for use.


# `findWaldo(names, found)`
- Description: Searches for the name "Waldo" in an array and executes a callback function when found.

- Parameters:
  - `names` (Array): The array of names to search through.
  - `found` (Function): The callback function to execute when "Waldo" is found. It takes the index of "Waldo" as an argument.
- Returns: `Found Waldo at index <index>!`


# `countLetters(sentence)`
- Description: Counts the occurrences of each letter in a sentence.

- Parameters:
  - `sentence` (String): The sentence to count the letters in.
- Returns: An object containing the counts of each letter.


# `countOnly(allItems, itemsToCount)`
- Description: Counts the occurrences of specific items in an array based on provided criteria.

- Parameters:
  - `allItems` (Array): The array of items to be counted.
  - `itemsToCount` (Object): The object specifies the items to count and their criteria.
- Returns: An object containing the counts of the specified items.


# `eqArrays(arr1, arr2)`
- Description: Checks if two arrays are equal.

- Parameters:
  - `arr1` (Array): The first array to compare.
  - `arr2` (Array): The second array to compare.
- Returns: `true` if the arrays are equal, `false` otherwise using `node eqArraysTest.js`.


# `eqObjects(object1, object2)`
- Description: Checks if two objects are equal.

- Parameters:
  - `object1` (Object): The first object to compare.
  - `object2` (Object): The second object to compare.
- Returns: `true` if the objects are equal, `false` otherwise.


# `findKey(object, callback)`
- Description: Finds a key in an object based on a provided callback function.

- Parameters:
  - `object` (Object): The object to search for a key in.
  - `callback` (Function): The callback function to execute for each key in the object. It takes the value of each key as an argument.
- Returns: The first key for which the callback function returns a truthy value, or `undefined` if no key is found.


# `findKeyByValue(object, value)`
- Description: Finds a key in an object based on a provided value.

- Parameters:
  - `object` (Object): The object to search for a key in.
  - `value` (Any): The value to find a key for.
- Returns: The first key that corresponds to the provided value, or `undefined` if no key is found.


# `flatten(arr)`
- Description: Flattens a nested array into a single-level array.

- Parameters:
  - `arr` (Array): The array to flatten.
- Returns: A new array with all nested elements flattened.


# `head(arr)`
- Description: Retrieves the first element of an array.

- Parameters:
  - `arr` (Array): The array to retrieve the first element from.
- Returns: The first element of the array, or `undefined` if the array is empty.


# `letterPositions(sentence)`
- Description: Maps the positions of each letter in a sentence.

- Parameters:
  - `sentence` (String): The sentence to map the letter positions for.
- Returns: An object containing arrays of positions for each letter.


# `map(arr, callback)`
- Description: Creates a new array by applying a callback function to each element of the provided array.

- Parameters:
  - `arr` (Array): The array to map over.
  - `callback` (Function): The callback function to execute for each element of the array. It takes the element as an argument.
- Returns: A new array with the results of the callback function applied to each element.


# `middle(arr)`
- Description: Retrieves the middle element(s) of an array.

- Parameters:
  - `arr` (Array): The array to retrieve the middle element(s) from.
- Returns: An array containing the middle element(s) of the array.


# `tail(arr)`
- Description: Retrieves all elements of an array except for the first element.

- Parameters:
  - `arr` (Array): The array to retrieve the tail from.
- Returns: A new array containing all elements except for the first element of the array.


# `takeUntil(arr, callback)`
- Description: Creates a new array by taking elements from the beginning of the provided array until the callback function returns a truthy value.

- Parameters:
  - `arr` (Array): The array to take elements from.
  - `callback` (Function): The callback function to execute for each element of the array. It takes the element as an argument.
- Returns: A new array with elements taken from the beginning of the original array until the callback function returns a truthy value.


# `without(source, itemsToRemove)`
- Description: Creates a new array with elements from the source array excluding the specified items to remove.

- Parameters:
  - `source` (Array): The array to filter elements from.
  - `itemsToRemove` (Array): The array of items to remove from the source array.
- Returns: A new array containing elements from the source array excluding the specified items.


# `package.json`:

- This file contains metadata about the project.


# `index.js`:

- Alternatively, use `require('./index')` to import any function from the library.