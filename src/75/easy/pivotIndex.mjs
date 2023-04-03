/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let leftSum = 0;
  let rightSum = nums.reduce((r, v, i) => (i ? r + v : 0), 0);

  for (let i = 0; i < nums.length; i++) {
    if (i) {
      leftSum += nums[i - 1];
      rightSum -= nums[i];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
};

module.exports = { pivotIndex };
