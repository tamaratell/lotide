const assertEqual = require('./assertEqual');

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


module.exports = eqObjects;