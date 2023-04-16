const { backspaceCompare } = require("./backspaceCompare.mjs");

test("Example 1", () => {
  const result = backspaceCompare("ab#c", "ab#c");
  expect(result).toBe(true);
});
test("Example 2", () => {
  const result = backspaceCompare("ab##", "c#d#");
  expect(result).toBe(true);
});
test("Example 3", () => {
  const result = backspaceCompare("a#c", "b");
  expect(result).toBe(false);
});
