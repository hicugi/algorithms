const { lengthOfLongestSubstring } = require("./lengthOfLongestSubstring.mjs");

test("Example 1", () => {
  const result = lengthOfLongestSubstring("abcabcbb");
  expect(result).toBe(3);
});
test("Example 2", () => {
  const result = lengthOfLongestSubstring("bbbbb");
  expect(result).toBe(1);
});
test("Example 3", () => {
  const result = lengthOfLongestSubstring("pwwkew");
  expect(result).toBe(3);
});

test("Testcase 407", () => {
  const result = lengthOfLongestSubstring("dvdf");
  expect(result).toBe(3);
});
