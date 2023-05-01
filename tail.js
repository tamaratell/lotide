const assertEqual = require('./assertEqual');
const getHead = require('./head');

//FUNCTION IMPLEMENTATION

const getTail = (arr) => {
  const tail = arr.slice(1);
  return tail;
};

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
getTail(words);
assertEqual(words.length, 3); 
