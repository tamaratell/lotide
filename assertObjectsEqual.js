const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  if (!eqObjects(object1, object2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
};


//TEST
assertObjectsEqual({ color: "red", size: "m" }, { color: "red", size: "m" });