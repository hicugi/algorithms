/**
 * @param {number[][]} arrays
 * @return {number}
 */
const maxDistance = (arrays) => {
  let result = 0;
  let min = Infinity;
  let max = -Infinity;

  for (let i = 1; i < arrays.length; i++) {
    const prevArr = arrays[i - 1];
    const arr = arrays[i];

    min = Math.min(min, prevArr[0]);
    max = Math.max(max, prevArr[prevArr.length - 1]);

    if (max > arr[0]) {
      result = Math.max(result, max - arr[0]);
    }
    if (min < arr[arr.length - 1]) {
      result = Math.max(result, arr[arr.length - 1] - min);
    }
  }

  return result;
};

module.exports = { maxDistance };
