const { diagonalSum } = require("./diagonalSum.mjs");

test("Example 1", () => {
  const arr = JSON.parse("[[1,2,3],[4,5,6],[7,8,9]]");
  const result = diagonalSum(arr);
  expect(result).toBe(25);
});
test("Example 2", () => {
  const arr = JSON.parse("[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]");
  const result = diagonalSum(arr);
  expect(result).toBe(8);
});
test("Example 3", () => {
  const result = diagonalSum([[5]]);
  expect(result).toBe(5);
});
