const { topKFrequent } = require("./topKFrequent.mjs");

test("Example 1", () => {
  const result = topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2);
  expect(result).toEqual(["i", "love"]);
});
test("Example 2", () => {
  const result = topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4);
  expect(result).toEqual(["the", "is", "sunny", "day"]);
});
