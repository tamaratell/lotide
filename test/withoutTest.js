const without = require('../without');
const assert = require("chai").assert;

describe("the function without", () => {
  it("should return [2, 3] when the array is [1, 2, 3] and the item to remove is [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("should return ['1', '2'] when the array is ['1', '2', '3'] and the item to remove is [1, 2 '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});
