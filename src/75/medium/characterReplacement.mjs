/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  const map = {};
  let maxLength = 0;
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    map[char] = (map[char] || 0) + 1;

    maxLength = Math.max(maxLength, map[char]);

    if (right - left + 1 - maxLength > k) {
      map[s[left]] -= 1;
      left += 1;
    }

    result = Math.max(result, right - left + 1);
  }
  return result;
};

module.exports = { characterReplacement };
