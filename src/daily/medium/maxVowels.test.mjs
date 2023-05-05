const { maxVowels } = require("./maxVowels.mjs");

test("Example 1", () => {
  const result = maxVowels("abciiidef", 3);
  expect(result).toBe(3);
});
test("Example 2", () => {
  const result = maxVowels("aeiou", 2);
  expect(result).toBe(2);
});
test("Example 3", () => {
  const result = maxVowels("leetcode", 3);
  expect(result).toBe(2);
});

test("Testcase", () => {
  const result = maxVowels("novowels", 1);
  expect(result).toBe(1);
});
