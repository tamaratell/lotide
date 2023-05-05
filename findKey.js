const assertEqual = require('./assertEqual');

//Implement the function findKey which takes in an object and a callback. 
//It should scan the object and return the first key for which the callback returns a truthy value. 
//If no key is found, then it should return undefined.

//FUNCTION IMPLEMENTATION
const findKey = (object, cb) => {
  let foundKey = undefined;
  for (const key in object) {
    if (cb(object[key])) {
      foundKey = key;
      return foundKey;
    }
  }
  return foundKey;
};




//TEST
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"