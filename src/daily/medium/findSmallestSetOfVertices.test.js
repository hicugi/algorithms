const { findSmallestSetOfVertices } = require("./findSmallestSetOfVertices.js");

test("Example 1", () => {
  const result = findSmallestSetOfVertices(6, JSON.parse("[[0,1],[0,2],[2,5],[3,4],[4,2]]"));
  expect(result).toEqual([0, 3]);
});
test("Example 2", () => {
  const result = findSmallestSetOfVertices(5, JSON.parse("[[0,1],[2,1],[3,1],[1,4],[2,4]]"));
  expect(result).toEqual([0, 2, 3]);
});
