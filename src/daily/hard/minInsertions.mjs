/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = (s) => {
  const { length } = s;

  let rs = "";
  for (let i = length - 1; i >= 0; i--) {
    rs += s[i];
  }

  const dp = new Array(length + 1).fill(0).map((_) => new Array());

  for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= length; j++) {
      if (!i || !j) {
        dp[i][j] = 0;
        continue;
      }

      if (s[i - 1] === rs[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        continue;
      }

      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return length - dp[length][length];
};

module.exports = { minInsertions };
