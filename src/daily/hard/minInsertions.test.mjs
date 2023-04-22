const { minInsertions } = require("./minInsertions.mjs");

test("Reverse changes", () => {
  const result = minInsertions("dcde");
  expect(result).toBe(1);
});

test("Example 1", () => {
  const result = minInsertions("zzazz");
  expect(result).toBe(0);
});
test("Example 2", () => {
  const result = minInsertions("mbadm");
  expect(result).toBe(2);
});
test("Example 3", () => {
  const result = minInsertions("leetcode");
  expect(result).toBe(5);
});

test("Testcase 20", () => {
  const result = minInsertions("zjveiiwvc");
  expect(result).toBe(5);
});
test("Testcase 57", () => {
  const result = minInsertions("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg");
  expect(result).toBe(238);
});
