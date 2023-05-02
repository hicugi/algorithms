const { arraySign } = require("./arraySign.mjs");

test("Example 1", () => {
  const result = arraySign([-1, -2, -3, -4, 3, 2, 1]);
  expect(result).toBe(1);
});
test("Example 2", () => {
  const result = arraySign([1, 5, 0, 2, -3]);
  expect(result).toBe(0);
});
test("Example 3", () => {
  const result = arraySign([-1, 1, -1, 1, -1]);
  expect(result).toBe(-1);
});
