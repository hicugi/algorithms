const { memoize } = require("./memoize.mjs");

test("Example 1", () => {
  const fn = (a, b) => a + b;

  const mockFn = jest.fn(fn);
  const memoFn = memoize(mockFn);

  const getLen = () => mockFn.mock.calls.length;

  const result = [memoFn(2, 2), memoFn(2, 2), getLen(), memoFn(1, 2), getLen()];
  expect(result).toEqual([4, 4, 1, 3, 2]);
});
test("Example 2", () => {
  const fn = (n) => (n <= 1 ? 1 : n * fn(n - 1));

  const mockFn = jest.fn(fn);
  const memoFn = memoize(mockFn);

  const getLen = () => mockFn.mock.calls.length;

  const result = [memoFn(2), memoFn(3), memoFn(2), getLen(), memoFn(3), getLen()];
  expect(result).toEqual([2, 6, 2, 2, 6, 2]);
});
test("Example 3", () => {
  const fn = (n) => (n < 2 ? n : fn(n - 2) + fn(n - 1));

  const mockFn = jest.fn(fn);
  const memoFn = memoize(mockFn);

  const getLen = () => mockFn.mock.calls.length;

  const result = [memoFn(6), getLen()];
  expect(result).toEqual([8, 1]);
});

test("Testcase 19", () => {
  const fn = (a, b) => a + b;

  const mockFn = jest.fn(fn);
  const memoFn = memoize(mockFn);

  const getLen = () => mockFn.mock.calls.length;

  const result = [memoFn(0, 0), memoFn(0, 0), getLen()];
  expect(result).toEqual([0, 0, 1]);
});
