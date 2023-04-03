/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!result.length) {
      result.push(nums[i]);
      continue;
    }

    result.push(result[i - 1] + nums[i]);
  }

  return result;
};

module.exports = { runningSum };
