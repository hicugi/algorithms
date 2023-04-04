/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const format = (str) => {
  const placeholder = {};
  const result = [];
  let n = 1;

  for (const char of str) {
    if (placeholder[char] === undefined) {
      placeholder[char] = n;
      n++;
    }

    result.push(placeholder[char]);
  }

  return result.join("");
};

const isIsomorphic = (s, t) => {
  return format(s) === format(t);
};

module.exports = { isIsomorphic };
