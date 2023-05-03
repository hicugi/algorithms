const { shortestWay } = require("./shortestWay.mjs");

test("Example 1", () => {
  const result = shortestWay("abc", "abcbc");
  expect(result).toBe(2);
});
test("Example 2", () => {
  const result = shortestWay("abc", "acdbc");
  expect(result).toBe(-1);
});
test("Example 3", () => {
  const result = shortestWay("xyz", "xzyxz");
  expect(result).toBe(3);
});
