const { countGoodStrings } = require("./countGoodStrings.mjs");

test("Example 1", () => {
  const result = countGoodStrings(3, 3, 1, 1);
  expect(result).toBe(8);
});
test("Example 2", () => {
  const result = countGoodStrings(2, 3, 1, 2);
  expect(result).toBe(5);
});
