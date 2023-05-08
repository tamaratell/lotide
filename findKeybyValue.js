const assertEqual = require('./assertEqual');

//Implement the function findKeyByValue which takes in an object and a value. 
//It should scan the object and return the first key which contains the given value. 
//If no key with that given value is found, then it should return undefined.

//FUNCTION IMPLEMENTATION
const findKeyByValue = (obj, value) => {
  let keyMatch = undefined;

  for (const key in obj) {
    if (value === obj[key]) {
      keyMatch = key;
    }
  }

  return keyMatch;
};


module.exports = findKeyByValue;

//TEST

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);