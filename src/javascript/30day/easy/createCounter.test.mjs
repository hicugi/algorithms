const { createCounter } = require("./createCounter.mjs");

test("Example 1", () => {
  const fn = createCounter(10);
  const result = new Array(3).fill().map(fn);
  expect(result).toEqual([10, 11, 12]);
});
test("Example 2", () => {
  const fn = createCounter(-2);
  const result = new Array(5).fill().map(fn);
  expect(result).toEqual([-2, -1, 0, 1, 2]);
});
