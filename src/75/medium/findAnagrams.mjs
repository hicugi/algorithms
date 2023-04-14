/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  let map = new Map();
  let left = 0;
  let right = 0;
  let count = p.length;
  let result = [];

  for (let i = 0; i < p.length; i++) {
    map.set(p[i], (map.get(p[i]) || 0) + 1);
  }

  while (right < s.length) {
    if (map.get(s[right]) > 0) {
      count--;
    }

    map.set(s[right], (map.get(s[right]) || 0) - 1);

    if (count === 0) result.push(left);

    if (right - left + 1 >= p.length) {
      if (map.get(s[left]) >= 0) {
        count++;
      }

      map.set(s[left], (map.get(s[left]) || 0) + 1);
      left++;
    }

    right++;
  }

  return result;
};

module.exports = { findAnagrams };
