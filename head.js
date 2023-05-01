const assertEqual = require('./assertEqual.js');
//FUNCTION IMPLEMENTATION

const getHead = (arr) => {
  let head = undefined;
  if (arr) {
    head = arr[0];
  }
  return head;
};

//TEST CODE
assertEqual(getHead([5, 6, 7]), 5);
assertEqual(getHead(["Hello", "Lighthouse", "Labs"]), "Hello");