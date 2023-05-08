
const findKeyByValue = (obj, value) => {
  let keyMatch = undefined;

  for (const key in obj) {
    if (value === obj[key]) {
      keyMatch = key;
    }
  }

  return keyMatch;
};


module.exports = findKeyByValue;

