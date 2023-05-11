const { maxUncrossedLines } = require("./maxUncrossedLines.mjs");

test("Example 1", () => {
  const result = maxUncrossedLines([1, 4, 2], [1, 2, 4]);
  expect(result).toBe(2);
});
test("Example 2", () => {
  const result = maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]);
  expect(result).toBe(3);
});
test("Example 3", () => {
  const result = maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]);
  expect(result).toBe(2);
});
