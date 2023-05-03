/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
  const ns1 = new Set(nums1);
  const ns2 = new Set(nums2);

  const dupNums = {};
  for (let n of ns1) {
    if (ns2.has(n)) {
      dupNums[n] = true;
    }
  }

  return [Array.from(ns1).filter((n) => !dupNums[n]), Array.from(ns2).filter((n) => !dupNums[n])];
}

module.exports = { findDifference };
