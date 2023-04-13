const { uniquePaths } = require("./uniquePaths.mjs");

test("Example 1", () => {
  const result = uniquePaths(3, 7);
  expect(result).toBe(28);
});
test("Example 2", () => {
  const result = uniquePaths(3, 2);
  expect(result).toBe(3);
});
