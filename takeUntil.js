const assertArraysEqual = require('./assertArraysEqual');

//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

//FUNCTION IMPLEMENTATION

const takeUntil = (array, cb) => {
  let results = [];

  for (const item of array) {
    if (cb(item)) {
      return results;
    }
    results.push(item);

  }
};



//TEST
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);

module.exports = takeUntil;