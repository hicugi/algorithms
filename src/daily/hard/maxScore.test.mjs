const { maxScore } = require("./maxScore.mjs");

test("Example 1", () => {
  const result = maxScore([1, 2]);
  expect(result).toBe(1);
});
test("Example 2", () => {
  const result = maxScore([3, 4, 6, 8]);
  expect(result).toBe(11);
});
test("Example 3", () => {
  const result = maxScore([1, 2, 3, 4, 5, 6]);
  expect(result).toBe(14);
});

test("Testcase 21", () => {
  const result = maxScore([697035, 181412, 384958, 575458]);
  expect(result).toBe(869);
});
test("Testcase 30", () => {
  const result = maxScore([925612, 737192, 813525, 707250]);
  expect(result).toBe(154);
});
test("Testcase 69", () => {
  const result = maxScore([415, 230, 471, 705, 902, 87]);
  expect(result).toBe(23);
});
