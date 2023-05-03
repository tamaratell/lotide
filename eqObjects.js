const assertEqual = require('./assertEqual');

//FUNCTION IMPLEMENTATION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

//They have the same number of keys
//The value for each key in one object is the same as the value for that same key in the other object

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }

  }

  return true;
};


//TEST
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false
