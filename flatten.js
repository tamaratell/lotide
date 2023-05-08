const flatten = (array) => {
  let toFlattenCount = 0;

  for (let element of array) {
    if (Array.isArray(element)) {
      toFlattenCount += 1;
    }
  }
  return array.flat(toFlattenCount);
};


module.exports = flatten;