/**
 * @param {number} k
 * @param {number[]} nums
 */
function search(arr, n) {
  var right = arr.length;
  if (!right) return 0;

  var left = 0;

  while (left < right) {
    var mid = Math.floor(left + (right - left) / 2);

    if (n >= arr[mid]) {
      left = mid + 1;
      continue;
    }
    right = mid;
  }

  return left;
}

class KthLargest {
  k = 0;
  nums = [];

  constructor(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => a - b);
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    var i = search(this.nums, val);
    this.nums.splice(i, 0, val);

    return this.nums[this.nums.length - this.k];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

module.exports = { KthLargest };
