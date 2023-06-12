const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns the first element 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns the first element '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns undefined for an empty array", () => {
    assert.isUndefined(head([]));
  });

  it("returns the first element of an array with multiple elements", () => {
    assert.strictEqual(head([10, 20, 30, 40]), 10);
  });

  it("returns the first element of an array with different data types", () => {
    assert.strictEqual(head(['mango', 100, true, { name: 'Cat' }]), 'mango');
  });
});
