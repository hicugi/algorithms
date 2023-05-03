const { findDifference } = require("./findDifference.mjs");

test("Example 1", () => {
  const result = findDifference([1, 2, 3], [2, 4, 6]);
  expect(result).toEqual([
    [1, 3],
    [4, 6],
  ]);
});
test("Example 2", () => {
  const result = findDifference([1, 2, 3, 3], [1, 1, 2, 2]);
  expect(result).toEqual([[3], []]);
});
