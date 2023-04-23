/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const mod = 1e9 + 7;
const numberOfArrays = (s, k) => {
  const { length } = s;
  const dp = {};

  const dfs = (index = 0) => {
    if (dp[index] !== undefined) return dp[index];
    if (index === length) return 1;

    const char = s[index];
    if (char === "0") return 0;

    let count = 0;
    for (let i = index; i < length; i++) {
      const n = Number(s.substring(index, i + 1));
      if (n > k) break;

      count = (count + dfs(i + 1)) % mod;
    }

    return (dp[index] = count);
  };

  return dfs();
};

module.exports = { numberOfArrays };
