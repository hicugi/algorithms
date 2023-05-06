/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const calc = (result, chars) => {
  return Math.max(
    result,
    Object.values(chars).reduce((r, v) => r + v)
  );
};

function lengthOfLongestSubstringKDistinct(s, k) {
  if (!k) return 0;

  let result = 1;
  let chars = {};

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (Object.keys(chars).length < k) {
      chars[c] = chars[c] ? chars[c] + 1 : 1;
      continue;
    }

    if (chars[c]) {
      chars[c]++;
      continue;
    }

    result = calc(result, chars);

    chars = { [c]: 1 };
    for (let j = i - 1; j >= 0; j--) {
      const key = s[j];
      if (!chars[key] && Object.keys(chars).length >= k) break;
      chars[key] = chars[key] ? chars[key] + 1 : 1;
    }
  }

  return calc(result, chars);
}

module.exports = { lengthOfLongestSubstringKDistinct };
