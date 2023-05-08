const findKey = (object, cb) => {
  let foundKey = undefined;
  for (const key in object) {
    if (cb(object[key])) {
      foundKey = key;
      return foundKey;
    }
  }
  return foundKey;
};

module.exports = findKey;


