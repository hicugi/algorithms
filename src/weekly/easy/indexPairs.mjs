/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
function indexPairs(text, words) {
  words.sort((a, b) => (a < b ? -1 : 1));

  const result = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    for (let j in words) {
      const word = words[j];
      if (word[0] !== char) continue;

      const endIndex = i + word.length;

      if (text.substring(i, endIndex) === word) {
        result.push([i, endIndex - 1]);
      }
    }
  }

  return result;
}

module.exports = { indexPairs };
