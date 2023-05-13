/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
const mod = 1e9 + 7;

function countGoodStrings(low, high, zero, one) {
  const dp = new Array(high + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= high; i++) {
    if (i >= zero) {
      dp[i] += dp[i - zero];
    }
    if (i >= one) {
      dp[i] += dp[i - one];
    }
    dp[i] %= mod;
  }

  let res = 0;
  for (let i = low; i <= high; i++) {
    res += dp[i];
    res %= mod;
  }

  return res;
}

module.exports = { countGoodStrings };
