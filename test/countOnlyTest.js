
const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("the function countOnly", () => {
  it("should return an object containing counts of everything that isn't in the input object listed", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.strictEqual(result1["Jason"], 1);
    assert.strictEqual(result1["Karima"], undefined);
    assert.strictEqual(result1["Fang"], 2);
    assert.strictEqual(result1["Agouhanna"], undefined);

  });
});



