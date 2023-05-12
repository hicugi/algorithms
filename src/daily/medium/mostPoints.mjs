/**
 * @param {number[][]} questions
 * @return {number}
 */
function mostPoints(questions) {
  const n = questions.length;

  const dp = new Array(n);
  dp[n - 1] = questions[n - 1][0];

  for (let i = n - 2; i >= 0; i--) {
    dp[i] = questions[i][0];

    let skip = i + questions[i][1] + 1;
    if (skip < n) {
      dp[i] += dp[skip]
    }

    dp[i] = Math.max(dp[i], dp[i + 1]);
  }

  return dp[0];
};

module.exports = { mostPoints };
