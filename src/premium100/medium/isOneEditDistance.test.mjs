const { isOneEditDistance } = require("./isOneEditDistance.mjs");

test("Example 1", () => {
  const result = isOneEditDistance("ab", "acb");
  expect(result).toBe(true);
});
test("Example 2", () => {
  const result = isOneEditDistance("", "");
  expect(result).toBe(false);
});
