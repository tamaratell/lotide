//FUNCTION IMPLEMENTATION

const getHead = (arr) => {
  let head = arr[0];
  if (!arr) {
    head = undefined;
  }
  return head;
};


module.exports = getHead;