/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// check by length & chars count
const isStringsValid = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const charCount = {};

  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    charCount[char1] = char1 in charCount ? charCount[char1] + 1 : 1;

    const char2 = s2[i];
    charCount[char2] = char2 in charCount ? charCount[char2] - 1 : -1;
  }

  for (const char in charCount) {
    if (charCount[char] !== 0) return false;
  }

  return true;
};

const isScramble = (s1, s2, memo = {}) => {
  if (s1.length === 1) return s1 === s2;
  if (s1 === s2) return true;

  const key = `${s1}-${s2}`;
  if (key in memo) return memo[key];

  if (!isStringsValid(s1, s2)) {
    memo[key] = false;
    return false;
  }

  const { length } = s1;
  for (let i = 1; i < length; i++) {
    const s1part1 = s1.substr(0, i);

    const isPart1Valid = isScramble(s1part1, s2.substr(0, i), memo) && isScramble(s1.substr(i), s2.substr(i), memo);
    const isPart2Valid = isScramble(s1part1, s2.substr(length - i), memo) && isScramble(s1.substr(i), s2.substr(0, length - i), memo);

    if (isPart1Valid || isPart2Valid) {
      memo[key] = true;
      return true;
    }
  }

  memo[key] = false;
  return false;
};

module.exports = { isScramble };
