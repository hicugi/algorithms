/**
 * @param {string} s
 * @return {number}
 */
const partitionString = (s) => {
  let res = 1;
  let prev = "";

  for (const char of s) {
    if (prev.includes(char)) {
      res += 1;
      prev = "";
    }

    prev += char;
  }

  return res;
};

module.exports = { partitionString };
