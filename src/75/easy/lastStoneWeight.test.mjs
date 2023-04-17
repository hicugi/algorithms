const { lastStoneWeight } = require("./lastStoneWeight.mjs");

test("Example 1", () => {
  const result = lastStoneWeight([2, 7, 4, 1, 8, 1]);
  expect(result).toBe(1);
});
test("Example 2", () => {
  const result = lastStoneWeight([1]);
  expect(result).toBe(1);
});
