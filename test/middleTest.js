// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');
// //test code middle
// assertArraysEqual(middle([1]), []); // Empty array
// assertArraysEqual(middle([1, 2]), []); // Empty array
// assertArraysEqual(middle([1, 2, 3]), [2]); // Single middle element
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Single middle element
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Two middle elements
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Two middle elements

// // Test Cases assert
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
// // Test Cases eqArrays
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

const assert = require('chai').assert;
const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');

describe("#middle", () => {
  it("returns an empty array for input [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array for input [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for input [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for input [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for input [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for input [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });


// describe("#assertArraysEqual", () => {
//   it("should pass for equal arrays [1, 2, 3] and [1, 2, 3]", () => {
//     assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
//   });

//   it("should fail for non-equal arrays [1, 2, 3] and [3, 2, 1]", () => {
//     assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false);
//   });

//   it("should pass for equal arrays ['1', '2', '3'] and ['1', '2', '3']", () => {
//     assert.strictEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']), true);
//   });

//   it("should fail for non-equal arrays ['1', '2', '3'] and ['1', '2', 3]", () => {
//     assert.strictEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]), false);
//   });
// });

// describe("#eqArrays", () => {
//   it("should pass for equal arrays [1, 2, 3] and [1, 2, 3]", () => {
//     assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//   });

//   it("should fail for non-equal arrays [1, 2, 3] and [3, 2, 1]", () => {
//     assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
//   });

//   it("should pass for equal arrays ['1', '2', '3'] and ['1', '2', '3']", () => {
//     assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
//   });

//   it("should fail for non-equal arrays ['1', '2', '3'] and ['1', '2', 3]", () => {
//     assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
//   });
// });

});
