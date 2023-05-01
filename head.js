const assertEqual = require('./assertEqual.js');
//FUNCTION IMPLEMENTATION

const getHead = (arr) => {
  let head = arr[0];
  if (!arr) {
    head = undefined;
  }
  return head;
};

//TEST CODE
// assertEqual(getHead([5, 6, 7]), 5);
// assertEqual(getHead(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(getHead([]), undefined);
// assertEqual(getHead([5]), 5);

module.exports = getHead;