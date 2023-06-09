const { topKFrequent } = require("./topKFrequent.js");

test("Example 1", () => {
  const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
  expect(result).toEqual([1, 2]);
});
test("Example 2", () => {
  const result = topKFrequent([1], 1);
  expect(result).toEqual([1]);
});

test("Testcase 9", () => {
  const result = topKFrequent([1, 2]);
  expect(result).toEqual([1, 2]);
});
