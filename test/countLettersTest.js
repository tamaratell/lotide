const countLetters = require('../countLetters');
const assert = require("chai").assert;

const testString = "butterfly";

const result1 = countLetters(testString);



describe("the function countLetters", () => {
  it("should return the number of letters in the string given as an argument to the function", () => {
    const testString = "butterfly";
    const result1 = countLetters(testString);
    assert.strictEqual(result1["b"], 1);
    assert.strictEqual(result1["w"], undefined);
    assert.strictEqual(result1["t"], 2);
    assert.strictEqual(result1["g"], undefined);
  });
});