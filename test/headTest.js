// const assertEqual = require('../assertEqual');
// const head = require('../head');

// assertEqual(head([5, 6, 7]), 5); //yields head 0
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //yields head 0
// assertEqual(head([602]), 602); //yields the only one element as its head
// assertEqual(head(["meow"]), "meow"); //yields the only one element as its head
// assertEqual(head([]), undefined); //yields undefined as it's empty

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

});