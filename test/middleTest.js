const getMiddle = require('../middle');
const assert = require("chai").assert;


describe("the function getMiddle", () => {
  it("returns an empty array for arrays with one element", () => {
    assert.deepEqual(getMiddle([1]), []);
  });
  it("returns an empty array for arrays with two elements", () => {
    assert.deepEqual(getMiddle([1, 2]), []);
  });
  it('returns an array containing a single middle element for arrays with odd numbers of elements', () => {
    assert.deepEqual(getMiddle([1, 2, 3]), [2]);
  });
  it('returns an array containing the two middle element for arrays with even numbers of elements', () => {
    assert.deepEqual(getMiddle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});