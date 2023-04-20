const { widthOfBinaryTree } = require("./widthOfBinaryTree.mjs");

test("Example 1", () => {
  const data = JSON.parse('{"val":1,"left":{"val":3,"left":{"val":5,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}},"right":{"val":2,"left":null,"right":{"val":9,"left":null,"right":null}}}');
  const result = widthOfBinaryTree(data);
  expect(result).toBe(4);
});
test("Example 2", () => {
  const data = JSON.parse('{"val":1,"left":{"val":3,"left":{"val":5,"left":{"val":6,"left":null,"right":null},"right":null},"right":null},"right":{"val":2,"left":null,"right":{"val":9,"left":{"val":7,"left":null,"right":null},"right":null}}}');
  const result = widthOfBinaryTree(data);
  expect(result).toBe(7);
});
test("Example 3", () => {
  const data = JSON.parse('{"val":1,"left":{"val":3,"left":{"val":5,"left":null,"right":null},"right":null},"right":{"val":2,"left":null,"right":null}}');
  const result = widthOfBinaryTree(data);
  expect(result).toBe(2);
});
