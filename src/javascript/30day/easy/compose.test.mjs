const { compose } = require("./compose.mjs");

test("Example 1", () => {
  const result = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])(4);
  expect(result).toBe(65);
});
test("Example 2", () => {
  const result = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x])(1);
  expect(result).toBe(1000);
});
test("Example 3", () => {
  const result = compose([])(42);
  expect(result).toBe(42);
});
