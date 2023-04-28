/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
function minWindow(s1, s2) {
  const n = s1.length;
  const m = s2.length;

  const dp = new Array(n + 1).fill().map((_) => new Array(m + 1).fill(1000000000));
  dp[0][0] = 0;

  let end = 0;
  let length = n + 1;

  for (let i = 1; i <= n; i++) {
    dp[i][0] = 0;

    for (let j = 1; j <= m; j++) {
      dp[i][j] = 1 + (s1[i - 1] === s2[j - 1] ? dp[i - 1][j - 1] : dp[i - 1][j]);
    }

    if (dp[i][m] < length) {
      length = dp[i][m];
      end = i;
    }
  }

  return length > n ? "" : s1.substring(end - length, end);
}

module.exports = { minWindow };
