const without = (array, itemsToRemove) => {
  let editedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== itemsToRemove[i]) {
      editedArray.push(array[i]);
    }
  }

  return editedArray;
};


module.exports = without;