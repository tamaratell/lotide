const takeUntil = (array, cb) => {
  let results = [];

  for (const item of array) {
    if (cb(item)) {
      return results;
    }
    results.push(item);

  }
};


module.exports = takeUntil;