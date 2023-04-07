/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let result = 0;
  let min;

  for (let i = 0; i < prices.length - 1; i++) {
    min = i ? Math.min(min, prices[i]) : prices[i];
    result = Math.max(result, prices[i + 1] - min);
  }

  return result > 0 ? result : 0;
};

module.exports = { maxProfit };
