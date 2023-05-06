const { lengthOfLongestSubstringKDistinct } = require("./lengthOfLongestSubstringKDistinct.mjs");

test("Example 1", () => {
  const result = lengthOfLongestSubstringKDistinct("eceba", 2);
  expect(result).toBe(3);
});
test("Example 2", () => {
  const result = lengthOfLongestSubstringKDistinct("aa", 1);
  expect(result).toBe(2);
});

test("Testcase 58", () => {
  const result = lengthOfLongestSubstringKDistinct("bacc", 2);
  expect(result).toBe(3);
});
