/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseWords = (s) => {
  const result = [];

  const { length } = s;
  for (let i = length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (result.length) result.push(" ");
      result.push(...s.splice(i, Infinity).slice(1));
    }
  }

  if (result.length) result.push(" ");
  result.push(...s);

  return result;
};

module.exports = { reverseWords };
