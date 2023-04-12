/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n < 3) return n;

  let a = 1,
    b = 2,
    c;

  for (let i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return b;
};

module.exports = { climbStairs };
