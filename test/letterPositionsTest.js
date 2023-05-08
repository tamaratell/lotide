const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("letterPositions", () => {
  it("should return the letter count for each letter in the string", () => {
    assert.deepEqual(letterPositions("hello"), {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4]
    });
  });
});
