/**
 * @param {string} s
 * @return {string}
 */
const STAR = "*";

const removeStars = (s) => {
  while (s.length) {
    let startIndex = s.indexOf(STAR);
    if (startIndex === -1) return s;

    let count = 1;
    while ([s[startIndex + count], s[startIndex + count + 1]] === STAR) {
      count += 1;
    }

    const endIndex = startIndex + count;
    startIndex -= count;

    s = `${s.substring(0, startIndex)}${s.substring(endIndex)}`;
  }

  return "";
};

module.exports = { removeStars };
