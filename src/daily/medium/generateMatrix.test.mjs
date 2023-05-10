const { generateMatrix } = require("./generateMatrix.mjs");

test("Example 1", () => {
  const result = generateMatrix(3);
  expect(result).toEqual(JSON.parse("[[1,2,3],[8,9,4],[7,6,5]]"));
});
test("Example 2", () => {
  const result = generateMatrix(1);
  expect(result).toEqual([[1]]);
});
