const { profitableSchemes } = require("./profitableSchemes.mjs");

test("Example 1", () => {
  const result = profitableSchemes(5, 3, [2, 2], [2, 3]);
  expect(result).toBe(2);
});
test("Example 2", () => {
  const result = profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8]);
  expect(result).toBe(7);
});
