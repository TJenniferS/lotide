# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @TJenniferS/lotide`

**Require it:**

`const _ = require('@TJenniferS/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual.js`:

This module exports a function named assertArraysEqual.
The function compares two arrays arr1 and arr2 and logs whether they are equal or not.
It internally uses the eqArrays function to check for array equality.

* `assertEqual.js`:

This module exports a function named assertEqual.
The function compares two values actual and expected and logs whether they are equal or not.

* `assertObjectsEqual.js`:

This module exports a function named assertObjectsEqual.
The function compares two objects actual and expected and logs whether they are equal or not.
It internally uses the eqObjects function to check for object equality.

* `callbacks.js`:

This code snippet demonstrates the concept of callback functions.
It defines a function findWaldo that takes an array of names and a callback function found.
The findWaldo function iterates over the names and calls the found callback when it finds a specific name ("Waldo" or "Mario").
The actionWhenFound function is an example callback function that logs a message when Waldo is found.
The code demonstrates how to use a callback function as an argument to another function.

* `countLetters.js`:

This module exports a function named countLetters.
The function takes a sentence as input and returns an object containing the count of each letter in the sentence.
It ignores spaces while counting the letters.

* `countOnly.js`:

This module exports a function named countOnly.
The function takes an array of items and an object itemsToCount.
It counts the occurrences of specific items (specified by itemsToCount) in the array and returns an object with the counts.
If an item is not present in itemsToCount, its count will be undefined in the result.

* `Test`:
This is a directory containing assertArraysEqualTest.js, assertEqualTest.js, eqArraysTest.js, headTest.js, middleTest.js, tailTest.js:

These files contain test cases for the corresponding modules.
They use assertions to compare the actual outputs of the functions with the expected outputs.

* `eqArrays.js`:

This module exports a function named eqArrays.
The function compares two arrays arr1 and arr2 and returns true if they are equal, false otherwise.

* `eqObjects.js`:

This module exports a function named eqObjects.
The function compares two objects object1 and object2 and returns true if they are equal, false otherwise.
It supports nested objects and arrays, using the eqArrays function to compare arrays within objects.
It does a deep comparison of object properties.

* `without.js`:

This module exports a function called without that takes in two arrays: source and itemsToRemove. The without function returns a new array that contains the elements from the source array, excluding any elements that are also present in the itemsToRemove array.

* `takeUntil.js`:

This module exports a function called takeUntil that takes in an array and a callback function callback. The takeUntil function returns a new array that includes elements from the array until the callback function returns a truthy value. Once the callback returns a truthy value, the takeUntil function stops iterating and ignores the remaining elements in the array.

* `tail.js`:

This module exports a function called tail that takes in an array. The tail function returns a new array that contains all elements of the input array except for the first element. The original array remains unchanged.

* `package.json`:

This file contains information on managing and running the library.

* `middle.js`:

This module exports a function called middle that takes in an array. The middle function returns a new array that contains the middle element(s) of the input array. If the input array has an odd number of elements, the returned array contains a single middle element. If the input array has an even number of elements, the returned array contains the two middle elements.

* `map.js`:

This module exports a function called map that takes in an array and a callback function callback. The map function applies the callback function to each element in the input array and returns a new array containing the results of the callback function for each element.

* `letterPosition.js`:

This module exports a function called letterPosition that takes in a string sentence. The letterPosition function returns an object where each key represents a letter in the input string, and the corresponding value is an array of indices where that letter appears in the string.

* `index.js`:

The index.js file serves as the entry point.

* `head.js`:

This module exports a function called head that takes in an array. The head function returns the first element of the input array.

* `flatten.js`:

This module exports a function called flatten that takes in an array containing nested arrays. The flatten function flattens the nested arrays and returns a new array with all the elements concatenated together.

* `findKeyValue.js`:

This module exports a function called findKeyValue that takes in an object and a callback function callback. The findKeyValue function searches the object and returns the first key for which the callback function returns a truthy value. If no key is found, the function returns undefined.

* `findKey.js`:

This module exports a function called findKey that takes in an object object and a callback function callback. The findKey function searches the object and returns the first key for which the callback function returns a truthy value. If no key is found, the function returns undefined.
