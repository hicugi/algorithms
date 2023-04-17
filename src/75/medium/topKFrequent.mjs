/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => {
  const sumWords = {};

  for (let word of words) {
    sumWords[word] = (sumWords[word] || 0) + 1;
  }

  const list = Object.entries(sumWords);
  list.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] === b[0]) return 0;
      return a[0] < b[0] ? -1 : 1;
    }
    return a[1] > b[1] ? -1 : 1;
  });

  const result = [];
  for (let i=0; list[i] && i < k; i++) {
    result.push(list[i][0]);
  }

  return result;
};

module.exports = { topKFrequent };
