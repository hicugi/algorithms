/**
 * @param {number} n
 * @return {boolean}
 */
const swap = {
  0: "0",
  1: "1",
  8: "8",
  6: "9",
  9: "6",
};
const confusingNumber = (n) => {
  const s = String(n);

  // check for invalid numbers: 2, 3, 4, 5, 7
  for (let c of s) {
    const value = Number(c);
    if ((2 <= value && value <= 5) || value === 7) {
      return false;
    }
  }

  let res = "";
  for (let i = s.length - 1; i >= 0; i--) {
    let c = s[i];
    res += swap[c];
  }
  const nRes = Number(res);

  return nRes !== n;
};

module.exports = { confusingNumber };
