/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const anagramMappings = (nums1, nums2) => {
  const indexes = {};
  for (let i = 0; i < nums2.length; i++) {
    indexes[nums2[i]] = i;
  }

  return nums1.map((n) => indexes[n]);
};

module.exports = { anagramMappings };
