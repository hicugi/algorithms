const { wiggleSort } = require("./wiggleSort.mjs");

test("Example 1", () => {
  const result = wiggleSort([3, 5, 2, 1, 6, 4]);
  expect(result).toEqual([3, 5, 1, 6, 2, 4]);
});
test("Example 2", () => {
  const result = wiggleSort([6, 6, 5, 6, 3, 8]);
  expect(result).toEqual([6, 6, 5, 6, 3, 8]);
});
