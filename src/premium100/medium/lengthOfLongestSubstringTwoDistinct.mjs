/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstringTwoDistinct(s) {
  let result = 1;
  let chars = {};

  const calc = () =>
    Math.max(
      result,
      Object.values(chars).reduce((r, v) => r + v)
    );

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (Object.keys(chars).length < 2) {
      chars[c] = chars[c] ? chars[c] + 1 : 1;
      continue;
    }

    if (chars[c]) {
      chars[c]++;
      continue;
    }

    result = calc();

    chars = { [c]: 1 };
    chars[s[i - 1]] = 1;
    for (let j = i - 2; j >= 0; j--) {
      if (!chars[s[j]]) break;
      chars[s[j]]++;
    }
  }

  return calc();
}

module.exports = { lengthOfLongestSubstringTwoDistinct };
