const { simplifyPath } = require("./simplifyPath.mjs");

test("Example 1", () => {
  const result = simplifyPath("/home/");
  expect(result).toEqual("/home");
});
test("Example 2", () => {
  const result = simplifyPath("/../");
  expect(result).toEqual("/");
});
test("Example 3", () => {
  const result = simplifyPath("/home//foo/");
  expect(result).toEqual("/home/foo");
});

test("Testcase 44", () => {
  const result = simplifyPath("/a/./b/../../c/");
  expect(result).toEqual("/c");
});
