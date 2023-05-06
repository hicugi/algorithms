/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let chars = {};
  let result = 0;
  let count = 0;

  const calc = () => Math.max(result, count);

  for (let i in s) {
    const c = s[i];

    if (chars[c]) {
      result = calc();

      count = 1;
      chars = { [c]: true };
      for (let j = i - 1; j >= 0; j--) {
        const cv = s[j];
        if (chars[cv]) break;
        chars[cv] = true;
        count++;
      }
      continue;
    }

    chars[c] = true;
    count++;
  }

  return calc();
}

module.exports = { lengthOfLongestSubstring };
