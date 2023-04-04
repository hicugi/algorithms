const { isIsomorphic } = require("./isIsomorphic.mjs");

test("Example 1", () => {
  const result = isIsomorphic("egg", "add");
  expect(result).toBe(true);
});
test("Example 2", () => {
  const result = isIsomorphic("foo", "bar");
  expect(result).toBe(false);
});
test("Example 3", () => {
  const result = isIsomorphic("paper", "title");
  expect(result).toBe(true);
});
