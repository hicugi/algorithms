const { listNode } = require("../../listNode.mjs");
const { swapNodes } = require("./swapNodes.mjs");

test("Example 1", () => {
  const result = swapNodes(listNode([1, 2, 3, 4, 5]), 2);
  expect(result).toEqual(listNode([1, 4, 3, 2, 5]));
});
test("Example 2", () => {
  const result = swapNodes(listNode([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]), 5);
  expect(result).toEqual(listNode([7, 9, 6, 6, 8, 7, 3, 0, 9, 5]));
});

test("Testcase 68", () => {
  const result = swapNodes(listNode([100, 90], 2), 2);
  expect(result).toEqual(listNode([90, 100]));
});
