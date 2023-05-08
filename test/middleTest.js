const assertArraysEqual = require('../assertArraysEqual');
const getMiddle = require('../middle');

//TEST
//For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(getMiddle([1]), []); // => []
assertArraysEqual(getMiddle([1, 2]), []); // => []

//For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(getMiddle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(getMiddle([1, 2, 3, 4, 5]), [3]); // => [3]

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArraysEqual(getMiddle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(getMiddle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]