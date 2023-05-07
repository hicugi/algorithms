/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
function search(nums, h) {
  let right = nums.length;
  if (right == 0) return 0;

  let left = 0;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (!nums[mid]) break;

    if (nums[mid] <= h) {
      left = mid + 1;
      continue;
    }

    right = mid;
  }

  return left;
}

function longestObstacleCourseAtEachPosition(obstacles) {
  const nums = [];
  const res = new Array(obstacles.length);

  for (let i in obstacles) {
    const h = obstacles[i];
    const idx = search(nums, h);

    nums[idx] = h;
    res[i] = idx + 1;
  }

  return res;
}

module.exports = { longestObstacleCourseAtEachPosition };
