const { maxScore } = require("./maxScore.js");

test("Example 1", () => {
  const result = maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3);
  expect(result).toBe(12);
});
test("Example 2", () => {
  const result = maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1);
  expect(result).toBe(30);
});

test("Testcase 13", () => {
  const result = maxScore([23, 16, 20, 7, 3], [19, 21, 22, 22, 12], 3);
  expect(result).toBe(1121);
});
test("Testcase 17", () => {
  const result = maxScore([22, 5, 25, 15, 28, 1], [22, 30, 25, 25, 9, 18], 3);
  expect(result).toBe(1364);
});
test("Testcase 20", () => {
  const result = maxScore([2, 1, 14, 12], [11, 7, 13, 6], 3);
  expect(result).toBe(168);
});
