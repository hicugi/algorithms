const { isOneEditDistance } = require("./isOneEditDistance.mjs");

test("Example 1", () => {
  const result = isOneEditDistance("ab", "acb");
  expect(result).toBe(true);
});
test("Example 2", () => {
  const result = isOneEditDistance("", "");
  expect(result).toBe(false);
});

test("Testcase 117", () => {
  const result = isOneEditDistance("cb", "ab");
  expect(result).toBe(true);
});
test("Testcase 129", () => {
  const result = isOneEditDistance("teacher", "teachy");
  expect(result).toBe(false);
});
