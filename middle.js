//FUNCTION IMPLEMENTATION
const getMiddle = (array) => {
  let middle = [];
  const middleIndex = Math.floor((array.length - 1) / 2);

  if (array.length > 2) {
    middle.push(array[middleIndex]);

    if (array.length % 2 === 0) {
      middle.push(array[middleIndex + 1]);
    }
  }


  return middle;

};


module.exports = getMiddle;

