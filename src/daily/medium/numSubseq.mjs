/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const mod = 1e9 + 7;

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.round(left + (right - left) / 2);

    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function numSubseq(nums, target) {
  nums.sort((a, b) => a - b);

  const { length } = nums;

  const fib = new Array(length);
  fib[0] = 1;
  for (let i = 1; i < length; i++) {
    fib[i] = (fib[i - 1] * 2) % mod;
  }

  let result = 0;

  for (let left = 0; left < length; left++) {
    let right = search(nums, target - nums[left]) - 1;
    if (right >= left) {
      result += fib[right - left];
      result %= mod;
    }
  }

  return result;
}

module.exports = { numSubseq };
