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



module.exports = countLetters;