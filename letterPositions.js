const letterPositions = function(sentence) {
  const howMany = {};

  for (let i = 0; i < sentence.length; i++) {
    if (!howMany[sentence[i]]) {
      howMany[sentence[i]] = [];
    }

    howMany[sentence[i]].push(i);

  }

  return howMany;
};

module.exports = letterPositions;

