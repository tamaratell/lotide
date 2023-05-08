const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

//TEST

assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
assertArraysEqual([1, 1, 1], [1, 1, 1]); // => should PASS
assertArraysEqual([1, "1"], [1, 1]); // => should FAIL

