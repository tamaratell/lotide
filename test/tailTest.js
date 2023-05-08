const getTail = require('../tail');
const assert = require("chai").assert;


describe("the function getTail", () => {
  it("returns all elements of the array except element 0", () => {
    assert.deepEqual(getTail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("does not modify the length of the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    getTail(words);
    assert.strictEqual(words.length, 3);
  });
});
