const { shortestBridge } = require("./shortestBridge.js");

test("Example 1", () => {
  const grid = [
    [0, 1],
    [1, 0],
  ];
  const result = shortestBridge(grid);
  expect(result).toBe(1);
});
test("Example 2", () => {
  const grid = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
  ];
  const result = shortestBridge(grid);
  expect(result).toBe(2);
});
test("Example 3", () => {
  const grid = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ];
  const result = shortestBridge(grid);
  expect(result).toBe(1);
});

test("Testcase 29", () => {
  const grid = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0],
  ];
  const result = shortestBridge(grid);
  expect(result).toBe(2);
});
