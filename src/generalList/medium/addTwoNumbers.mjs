/**
 * @param {number[]} l1
 * @param {number[]} l2
 * @return {number[]}
 */

const addTwoNumbers = (arr1, arr2) => {
  const result = [];
  const length = Math.max(arr1.length, arr2.length);

  let leftOver = 0;
  for (let i = 0; i < length; i++) {
    const value1 = arr1[i] || 0;
    const value2 = arr2[i] || 0;

    const sum = value1 + value2 + leftOver;

    if (sum < 10) {
      result.push(sum);
      leftOver = 0;
      continue;
    }

    leftOver = 1;
    result.push(sum - 10);
  }
  if (leftOver) result.push(leftOver);

  return result;
};

module.exports = { addTwoNumbers };
