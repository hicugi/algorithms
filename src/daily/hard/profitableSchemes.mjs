/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
const profitableSchemes = (n, minProfit, group, profits) => {
  const mod = 1e9 + 7;
  const memo = {};

  const findScheme = (index = 0, count = 0, profit = 0) => {
    if (index === group.length) {
      return profit >= minProfit;
    }

    const memoKey = `${index}.${count}.${profit}`;
    if (memo[memoKey] !== undefined) return memo[memoKey];

    let totalWays = findScheme(index + 1, count, profit);

    if (count + group[index] <= n) {
      totalWays += findScheme(index + 1, count + group[index], Math.min(minProfit, profit + profits[index]));
    }

    return (memo[memoKey] = totalWays % mod);
  };

  return findScheme();
};

module.exports = { profitableSchemes };
