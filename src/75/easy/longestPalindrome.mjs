/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  if (s.length === 1) return 1;

  const chars = {};
  for (let char of s) {
    chars[char] = chars[char] ? chars[char] + 1 : 1;
  }

  let result = 0;
  let max;
  Object.values(chars).forEach((value) => {
    if (value % 2 === 0) {
      result += value;
      return;
    }

    if (max === undefined) {
      max = value;
      return;
    }

    result += (max > value ? value : max) - 1;
    max = Math.max(max, value);
  });

  return result + (max || 0);
};

module.exports = { longestPalindrome };
