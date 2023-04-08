const { mergeTwoLists } = require("./mergeTwoLists.mjs");

test("Example 1", () => {
  const result = mergeTwoLists([1, 2, 4], [1, 3, 4]);
  expect(result).toEqual([1, 1, 2, 3, 4, 4]);
});
test("Example 2", () => {
  const result = mergeTwoLists([], []);
  expect(result).toEqual([]);
});
test("Example 3", () => {
  const result = mergeTwoLists([], [0]);
  expect(result).toEqual([0]);
});
