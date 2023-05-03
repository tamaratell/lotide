const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = (array) => {
  let toFlattenCount = 0;

  for (let element of array) {
    if (Array.isArray(element)) {
      toFlattenCount += 1;
    }
    //flattenedArray.push(element);
  }
  return array.flat(toFlattenCount);
};

//TEST
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([[1], [2], [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]

