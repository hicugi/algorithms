const { maxDistance } = require("./maxDistance.mjs");

test("Example 1", () => {
  const result = maxDistance([
    [1, 2, 3],
    [4, 5],
    [1, 2, 3],
  ]);
  expect(result).toBe(4);
});
test("Example 2", () => {
  const result = maxDistance([[1], [1]]);
  expect(result).toEqual(0);
});

test("Testcase 107", () => {
  const result = maxDistance([
    [1, 4],
    [0, 5],
  ]);
  expect(result).toEqual(4);
});
test("Testcase 109", () => {
  const result = maxDistance([
    [-1, 1],
    [-3, 1, 4],
    [-2, -1, 0, 2],
  ]);
  expect(result).toEqual(6);
});
