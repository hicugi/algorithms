const { createCounter } = require("./createCounter2.mjs");

test("Example 1", () => {
  const { increment, reset, decrement } = createCounter(5);
  const result = [increment(), reset(), decrement()];
  expect(result).toEqual([6, 5, 4]);
});
test("Example 2", () => {
  const { increment, reset, decrement } = createCounter(0);
  const result = [increment(), increment(), decrement(), reset(), reset()];
  expect(result).toEqual([1, 2, 1, 0, 0]);
});
