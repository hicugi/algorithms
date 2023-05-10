const { multiply } = require("./multiply.mjs");

test("Example 1", () => {
  const d1 = JSON.parse("[[1,0,0],[-1,0,3]]");
  const d2 = JSON.parse("[[7,0,0],[0,0,0],[0,0,1]]");
  const result = multiply(d1, d2);
  expect(result).toEqual(JSON.parse("[[7,0,0],[-7,0,3]]"));
});
test("Example 2", () => {
  const result = multiply([[0]], [[0]]);
  expect(result).toEqual([[0]]);
});

test("Testcase 6", () => {
  const result = multiply([[0]], [[1]]);
  expect(result).toEqual([[0]]);
});
test("Testcase 8", () => {
  const result = multiply([[1, -5]], [[12], [-1]]);
  expect(result).toEqual([[17]]);
});
