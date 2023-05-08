const assertEqual = require('./assertEqual');

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
//FUNCTION IMPLEMENTATION

// for (const name in itemsToCount) {
//   if (itemsToCount[name]) {
//     howMany[name] = 0;
//   }

//console.log(howMany);

// for (const item of allItems) {
//   if (howMany.hasOwnProperty(item)) {
//     howMany[item] += 1;
//   }

// }

const countLetters = (someString) => {

  const howMany = {};

  for (const letter of someString) {
    if (!howMany[letter]) {
      howMany[letter] = 0;
    }

    howMany[letter] += 1;

  }

  return howMany;
};

const testString = "butterfly";

const result1 = countLetters(testString);

assertEqual(result1["b"], 1);
assertEqual(result1["w"], undefined);
assertEqual(result1["t"], 2);
assertEqual(result1["g"], undefined);

module.exports = countLetters;