const { pivotIndex } = require("./pivotIndex.mjs");

test("Example 1", () => {
  const result = pivotIndex([1, 7, 3, 6, 5, 6]);
  expect(result).toBe(3);
});
test("Example 2", () => {
  const result = pivotIndex([1, 2, 3]);
  expect(result).toBe(-1);
});
test("Example 3", () => {
  const result = pivotIndex([2, 1, -1]);
  expect(result).toBe(0);
});
