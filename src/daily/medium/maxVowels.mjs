/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
};

function maxVowels(s, k) {
  let result = 0;
  let n = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if (vowels[c]) n++;
    if (i < k) {
      result = n;
      continue;
    }

    if (vowels[s[i - k]]) n--;
    result = Math.max(result, n);
  }

  return result;
}

module.exports = { maxVowels };
