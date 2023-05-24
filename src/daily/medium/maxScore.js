/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
function search(arr, n) {
  var right = arr.length;
  if (!right) return 0;

  var left = 0;

  while (left < right) {
    var mid = Math.floor(left + (right - left) / 2);

    if (arr[left] === n) return left;
    if (n >= arr[mid]) {
      left = mid + 1;
      continue;
    }
    right = mid;
  }

  return left;
}

function maxScore(nums1, nums2, k) {
  var n = nums1.length;
  var list = new Array(n);

  for (var i = 0; i < n; i++) {
    list[i] = [nums1[i], nums2[i]];
  }

  list.sort(([a1, b1], [a2, b2]) => {
    if (b1 === b2) return a1 - a2;
    return b1 - b2;
  });

  var topList = list
    .slice(n - k)
    .map(([v]) => v)
    .sort((a, b) => a - b);
  var sum = topList.reduce((r, v) => r + v, 0);
  var result = sum * list[n - k][1];

  for (var i = n - k - 1; i >= 0; i--) {
    var j = search(topList, Math.min(...topList));

    sum -= topList[j];
    sum += list[i][0];

    j = search(topList, list[i][0]);
    topList.splice(j, 1, list[i][0]);

    result = Math.max(result, sum * list[i][1]);
  }

  return result;
}

module.exports = { maxScore };
