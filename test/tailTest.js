// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); //we only want 2 elements
// assertEqual(result[0], "Lighthouse"); //first element will be "Lighthouse"
// assertEqual(result[1], "Labs"); //2nd element is "Labs"

// //Test case: Check original array

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); //not capturing return value since it's not what we're checking
// assertEqual(words.length, 3); //original array should still have 3 elements

const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {
  it("should return an array of length 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it("should return 'Lighthouse' as the first element for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("should return 'Labs' as the second element for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });

  it("should not modify the original array ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});
