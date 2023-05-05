const { lengthOfLongestSubstringTwoDistinct } = require("./lengthOfLongestSubstringTwoDistinct.mjs");

// test("Custome", () => {
//   const result = lengthOfLongestSubstringTwoDistinct("ecebaqweraaaassszxc");
//   expect(result).toBe(3);
// });

test("Example 1", () => {
  const result = lengthOfLongestSubstringTwoDistinct("eceba");
  expect(result).toBe(3);
});
test("Example 2", () => {
  const result = lengthOfLongestSubstringTwoDistinct("ccaabbb");
  expect(result).toBe(5);
});
