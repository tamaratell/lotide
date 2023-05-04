const assertArraysEqual = require('./assertArraysEqual');

// Our map function will take in two arguments:
// An array to map
// A callback function

// The map function will return a new array based on the results of the callback function.

//FUNCTION IMPLEMENTATION

const map = (array, cb) => {
  let results = [];

  for (const element of array) {
    results.push(cb(element));
  }

  return results;

};




//TEST
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.length < 3);
console.log(results3);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, [false, false, true, false, false]);