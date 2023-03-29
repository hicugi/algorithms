/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const { length } = nums;

  for (let i=0; i < length; i++) {
    const n = nums.shift();
    const value = target - n;

    const j = nums.indexOf(value)

    if (j > -1) {
      return [i, (i+1) + j];
    }
  };
};
