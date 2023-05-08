const countOnly = (allItems, itemsToCount) => {

  const howMany = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (howMany[item]) {
        howMany[item] += 1;
      } else {
        howMany[item] = 1;
      }
    }
  }
  return howMany;
};

module.exports = countOnly;