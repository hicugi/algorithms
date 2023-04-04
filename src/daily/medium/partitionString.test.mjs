const { partitionString } = require("./partitionString.mjs");

test("Example 1", () => {
  const result = partitionString("abacaba");
  expect(result).toBe(4);
});
test("Example 1", () => {
  const result = partitionString("ssssss");
  expect(result).toBe(6);
});
