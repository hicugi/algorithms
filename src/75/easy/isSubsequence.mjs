/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  for (let v of t) {
    if (s[0] === undefined) {
      return true;
    }
    if (s[0] === v) {
      s = s.substr(1);
    }
  }

  return s.length === 0;
};

module.exports = { isSubsequence };
