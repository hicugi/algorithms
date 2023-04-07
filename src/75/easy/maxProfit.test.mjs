const { maxProfit } = require("./maxProfit.mjs");

test("Example 1", () => {
  const result = maxProfit([7, 1, 5, 3, 6, 4]);
  expect(result).toBe(5);
});
test("Example 2", () => {
  const result = maxProfit([7, 6, 4, 3, 1]);
  expect(result).toBe(0);
});
