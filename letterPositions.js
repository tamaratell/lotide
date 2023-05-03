const assertArraysEqual = require('./assertArraysEqual');

//FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const howMany = {};

  for (let i = 0; i < sentence.length; i++) {
    if (!howMany[sentence[i]]) {
      howMany[sentence[i]] = [];
    }

    howMany[sentence[i]].push(i);

  }

  return howMany;
};


console.log(letterPositions("hello"));

//EXPECTED for string "hello"
// {
//  h: [0]
//  e: [1]
//  l: [2, 3]
//  o: [4]
// }

//TEST
assertArraysEqual(letterPositions("hello").e, [1]);