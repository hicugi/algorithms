const { validateStackSequences } = require("./validateStackSequences.mjs");

test("Example 1", () => {
  const result = validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);
  expect(result).toBe(true);
});
test("Example 2", () => {
  const result = validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]);
  expect(result).toBe(false);
});

test("Testcase 64", () => {
  const result = validateStackSequences([0], [0]);
  expect(result).toBe(true);
});
test("Testcase 95", () => {
  const result = validateStackSequences([1, 0], [1, 0]);
  expect(result).toBe(true);
});
