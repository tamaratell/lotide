
const map = (array, cb) => {
  let results = [];

  for (const element of array) {
    results.push(cb(element));
  }

  return results;

};

module.exports = map;

