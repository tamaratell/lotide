const eqArrays = require("./eqArrays");

const assertArraysEqual = (array1, array2) => {
  if (!eqArrays(array1, array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

//TEST

// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
// assertArraysEqual([1, 1, 1], [1, 1, 1]); // => should PASS
// assertArraysEqual([1, "1"], [1, 1]); // => should FAIL

module.exports = assertArraysEqual;