/**
 * @param {number[]} nums
 * @return {number}
 */
function arraySign(nums) {
  const n = nums.reduce((r, v) => r * v);

  if ([0, NaN].includes(n)) return 0;
  return n < 0 ? -1 : 1;
}

module.exports = { arraySign };
