/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function maxUncrossedLines(nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;

  const dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[n][m];
}

module.exports = { maxUncrossedLines };
