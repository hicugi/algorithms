/**
 * @param {number} n
 * @return {number}
 */
const maxA = (n) => {
  if (n < 7) return n;
  return Math.max(3 * maxA(n - 4), 4 * maxA(n - 5));
};

// Some checks:
// n == 8 -> aaaaaACV(10), aaaaACVV(12), aaaACVVV(12)
// n == 9 -> aaaACVACV(12), aaaaaACVV(15), aaaaACVVV(16)
// n == 10 -> aaaaACVACV(16), aaACVVACVV(18), aaaaaACVVV(20)
// n == 11 -> aaaaaACVACV(20), aaaACVVACVV(27), aaACVVACVVV(24)

module.exports = { maxA };
