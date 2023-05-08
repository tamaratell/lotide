const assertEqual = require('./assertEqual');

//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
//The function should report back how many instances of each string were found in the allItems array of strings.

//FUNCTION IMPLEMENTATION

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = (allItems, itemsToCount) => {

  const howMany = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (howMany[item]) {
        howMany[item] += 1;
      } else {
        howMany[item] = 1;
      }
    }
  }

  console.log(howMany);
  return howMany;
};

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





//TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;