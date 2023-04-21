/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = (s, shift) => {
  const chars = s.split("");

  for (let i = 0; i < shift.length; i++) {
    const [direction, amount] = shift[i];

    const j = direction && -amount;
    const k = direction ? 0 : Infinity;

    const slice = chars.splice(j, amount % s.length);
    chars.splice(k, 0, ...slice);
  }

  return chars.join("");
};

module.exports = { stringShift };
