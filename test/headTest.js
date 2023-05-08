const getHead = require('../head');
const assert = require("chai").assert;

describe("the function getHead", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(getHead([5, 6, 7]), 5);
  });
  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(getHead(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('returns undefined for []', () => {
    assert.strictEqual(getHead([]), undefined);
  });
  it('returns [5] for [5]', () => {
    assert.strictEqual(getHead([5]), 5);
  });
});