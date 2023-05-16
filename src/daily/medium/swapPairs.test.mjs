const { listNode } = require("../../listNode.mjs");
const { swapPairs } = require("./swapPairs.mjs");

test("Example 1", () => {
  const result = swapPairs(listNode([1, 2, 3, 4]));
  expect(result).toEqual(listNode([2, 1, 4, 3]));
});
test("Example 2", () => {
  const result = swapPairs(listNode([]));
  expect(result).toEqual(listNode([]));
});
test("Example 3", () => {
  const result = swapPairs(listNode([1]));
  expect(result).toEqual(listNode([1]));
});

test("Testcase 35", () => {
  const result = swapPairs(listNode([1, 2, 3]));
  expect(result).toEqual(listNode([2, 1, 3]));
});
