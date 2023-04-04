const { isSubsequence } = require("./isSubsequence.mjs");

test("Example 1", () => {
  const result = isSubsequence("abc", "ahbgdc");
  expect(result).toBe(true);
});
test("Example 2", () => {
  const result = isSubsequence("axc", "ahbgdc");
  expect(result).toBe(false);
});
