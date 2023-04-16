const { decodeString } = require("./decodeString.mjs");

test("Example 1", () => {
  const result = decodeString("3[a]2[bc]");
  expect(result).toBe("aaabcbc");
});
test("Example 2", () => {
  const result = decodeString("3[a2[c]]");
  expect(result).toBe("accaccacc");
});
test("Example 3", () => {
  const result = decodeString("2[abc]3[cd]ef");
  expect(result).toBe("abcabccdcdcdef");
});

test("Testcase 23", () => {
  const result = decodeString("abc3[cd]xyz");
  expect(result).toBe("abccdcdcdxyz");
});
test("Testcase 28", () => {
  const result = decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef");
  expect(result).toBe("zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef");
});
