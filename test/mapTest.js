const map = require('../map');
const assert = require('chai').assert;

describe("the function map", () => {
  it("should return a new array based on the results of the callback function", () => {
    const words = ["ground", "control", "to", "major", "tom"];

    const results1 = map(words, word => word[0]);
    const results2 = map(words, word => word.length);
    const results3 = map(words, word => word.length < 3);

    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
    assert.deepEqual(results2, [6, 7, 2, 5, 3]);
    assert.deepEqual(results3, [false, false, true, false, false]);
  });
});
