const { reverseWords } = require("./reverseWords.mjs");

test("Example 1", () => {
  const result = reverseWords("the sky is blue".split(""));
  expect(result.join("")).toEqual("blue is sky the");
});
test("Example 2", () => {
  const result = reverseWords("a".split(""));
  expect(result.join("")).toEqual("a");
});
