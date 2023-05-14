const { curry } = require("./curry.mjs");

test("Example 1", () => {
  const fnCurry = curry((a, b) => a + b);
  const result = fnCurry(1)(2);
  expect(result).toBe(3);
});
test("Example 2", () => {
  const fnCurry = curry((a, b, c) => a + b + c);
  const result = fnCurry(1, 2)(3);
  expect(result).toBe(6);
});
test("Example 3", () => {
  const fnCurry = curry((a, b, c) => a + b + c);
  const result = fnCurry()()(1, 2, 3);
  expect(result).toBe(6);
});
test("Example 4", () => {
  const fnCurry = curry(() => 42);
  const result = fnCurry();
  expect(result).toBe(42);
});
