const { numIslands } = require("./numIslands.mjs");

test("Example 1", () => {
  const result = numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]);
  expect(result).toBe(1);
});

test("Example 2", () => {
  const result = numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]);
  expect(result).toBe(3);
});
