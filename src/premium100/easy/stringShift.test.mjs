const { stringShift } = require("./stringShift.mjs");

test("Example 1", () => {
  const result = stringShift("abc", JSON.parse("[[0,1],[1,2]]"));
  expect(result).toBe("cab");
});
test("Example 2", () => {
  const result = stringShift("abcdefg", JSON.parse("[[1,1],[1,1],[0,2],[1,3]]"));
  expect(result).toBe("efgabcd");
});

test("Testcase 38", () => {
  const result = stringShift("abc", JSON.parse("[[0,4]]"));
  expect(result).toBe("bca");
});
