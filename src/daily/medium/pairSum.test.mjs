const { listNode } = require("../../listNode.mjs");
const { pairSum } = require("./pairSum.mjs");

test("Example 1", () => {
  const result = pairSum(listNode([5, 4, 2, 1]));
  expect(result).toBe(6);
});
test("Example 2", () => {
  const result = pairSum(listNode([4, 2, 2, 3]));
  expect(result).toBe(7);
});
test("Example 3", () => {
  const result = pairSum(listNode([1, 100000]));
  expect(result).toBe(100001);
});
