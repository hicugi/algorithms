/**
 * @param {number[]} nums
 * @return {number}
 */
function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

function maxScore(nums) {
  const len = 1 << nums.length; // 2^(nums array size)
  const dp = new Array(len).fill(0);

  for (let state = len - 1; state >= 0; state -= 1) {
    const numbersTaken = state.toString(2).split("1").length - 1;
    const pairsFormed = numbersTaken / 2;

    if (numbersTaken % 2) continue;

    for (let i = 0; i < nums.length; i += 1) {
      for (let j = i + 1; j < nums.length; j += 1) {
        // We only choose those numbers which were not already picked.
        if (((state >> i) & 1) == 1 || ((state >> j) & 1) == 1) continue;

        const currentScore = (pairsFormed + 1) * gcd(nums[i], nums[j]);
        const stateAfterPickingCurrPair = state | (1 << i) | (1 << j);
        const remainingScore = dp[stateAfterPickingCurrPair];

        dp[state] = Math.max(dp[state], currentScore + remainingScore);
      }
    }
  }

  return dp[0];
}

module.exports = { maxScore };
