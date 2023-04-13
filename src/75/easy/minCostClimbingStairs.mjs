/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
  const { length } = cost;

  if (length < 2) return 0;

  for (let i = 2; i < length; i++) {
    cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2]);
  }

  return Math.min(cost[length - 1], cost[length - 2]);
};

module.exports = { minCostClimbingStairs };
