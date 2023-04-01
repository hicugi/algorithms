/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestWordDistance = (wordsDict, word1, word2) => {
  let result;
  let prev, prev2;

  for (let index = 0; index < wordsDict.length; index++) {
    const currentWord = wordsDict[index];
    if (![word1, word2].includes(currentWord)) continue;

    if (word1 === word2) {
      if (prev === undefined) {
        prev = index;
        continue;
      }

      if (result === undefined) {
        result = index - prev;
        prev = index;
        continue;
      }

      result = Math.min(result, index - prev);
      prev = index;
      continue;
    }

    if (currentWord === word1) {
      prev = index;
    }
    if (currentWord === word2) {
      prev2 = index;
    }

    if (prev !== undefined && prev2 !== undefined) {
      if (result === undefined) {
        result = Math.abs(prev - prev2);
        continue;
      }

      result = Math.min(result, Math.abs(prev - prev2));
    }
  }

  return result;
};

module.exports = { shortestWordDistance };
