/**
 * @param {number[]} nums
 * @return {number}
 */
const minimizeArrayValue = (nums) => {
  let res = nums[0];
  let total = nums[0];

  for (let i = 1; i < nums.length; i++) {
    total += nums[i];
    res = Math.max(res, Math.ceil(total / (i + 1)));
  }

  return res;
};

module.exports = { minimizeArrayValue };
