const assertEqual = require('../assertEqual');
const getHead = require('../head');

//TEST CODE
assertEqual(getHead([5, 6, 7]), 5);
assertEqual(getHead(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(getHead([]), undefined);
assertEqual(getHead([5]), 5);