const { indexPairs } = require("./indexPairs.mjs");

test("Example 1", () => {
  const result = indexPairs("thestoryofleetcodeandme", ["story", "fleet", "leetcode"]);
  expect(result).toEqual([
    [3, 7],
    [9, 13],
    [10, 17],
  ]);
});
test("Example 2", () => {
  const result = indexPairs("ababa", ["aba", "ab"]);
  expect(result).toEqual([
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
  ]);
});
