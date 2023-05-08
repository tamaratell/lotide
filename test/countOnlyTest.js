
const countOnly = require('../countOnly');
const assert = require('chai').assert;
//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
//The function should report back how many instances of each string were found in the allItems array of strings.

//FUNCTION IMPLEMENTATION

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

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



