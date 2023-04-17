const { kidsWithCandies } = require("./kidsWithCandies.mjs");

test("Example 1", () => {
  const result = kidsWithCandies([2, 3, 5, 1, 3], 3);
  expect(result).toEqual([true, true, true, false, true]);
});
test("Example 2", () => {
  const result = kidsWithCandies([4, 2, 1, 1, 2], 1);
  expect(result).toEqual([true, false, false, false, false]);
});
test("Example 3", () => {
  const result = kidsWithCandies([12, 1, 12], 10);
  expect(result).toEqual([true, false, true]);
});
