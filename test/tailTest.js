const assertEqual = require('../assertEqual');
const getTail = require('../tail');

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
getTail(words);
assertEqual(words.length, 3); 