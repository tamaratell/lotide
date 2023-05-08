const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("the function takeUntil", () => {
  it("should keep collecting items from a provided array until the callback returns a truthy value", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
});
