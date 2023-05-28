const { minCost } = require("./minCost.js");

test("Example 1", () => {
  const result = minCost(7, [1, 3, 4, 5]);
  expect(result).toBe(16);
});
test("Example 2", () => {
  const result = minCost(9, [5, 6, 1, 4, 2]);
  expect(result).toBe(22);
});
