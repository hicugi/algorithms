/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    const prevN = nums[i - 1];
    const n = nums[i];

    const isEven = i % 2 === 0;

    if (!isEven && prevN > n) {
      nums[i] = prevN;
      nums[i - 1] = n;
    }
    if (isEven && prevN < n) {
      nums[i] = prevN;
      nums[i - 1] = n;
    }
  }

  return nums;
};

module.exports = { wiggleSort };
