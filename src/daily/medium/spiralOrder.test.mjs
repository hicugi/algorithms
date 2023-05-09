const { spiralOrder } = require("./spiralOrder.mjs");

test("Example 1", () => {
  const data = JSON.parse("[[1,2,3],[4,5,6],[7,8,9]]");
  const result = spiralOrder(data);
  expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});
test("Example 2", () => {
  const data = JSON.parse("[[1,2,3,4],[5,6,7,8],[9,10,11,12]]");
  const result = spiralOrder(data);
  expect(result).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
});
