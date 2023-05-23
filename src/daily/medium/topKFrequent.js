/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  var obj = {};

  for (var i = 0; i < nums.length; i++) {
    var n = nums[i];
    obj[n] = obj[n] ? obj[n] + 1 : 1;
  }

  var list = Object.entries(obj).sort(([, c1], [, c2]) => c2 - c1);
  return list.slice(0, k).map(([n]) => Number(n));
}

module.exports = { topKFrequent };
