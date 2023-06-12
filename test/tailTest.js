const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); //we only want 2 elements
assertEqual(result[0], "Lighthouse"); //first element will be "Lighthouse"
assertEqual(result[1], "Labs"); //2nd element is "Labs"

//Test case: Check original array

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); //not capturing return value since it's not what we're checking
assertEqual(words.length, 3); //original array should still have 3 elements