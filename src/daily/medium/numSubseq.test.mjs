const { numSubseq } = require("./numSubseq.mjs");

test("Example 1", () => {
  const result = numSubseq([3, 5, 6, 7], 9);
  expect(result).toEqual(4);
});
test("Example 2", () => {
  const result = numSubseq([3, 3, 6, 8], 10);
  expect(result).toEqual(6);
});
test("Example 3", () => {
  const result = numSubseq([2, 3, 3, 4, 6, 7], 12);
  expect(result).toEqual(61);
});

test("Testcase 19", () => {
  const result = numSubseq([14, 4, 6, 6, 20, 8, 5, 6, 8, 12, 6, 10, 14, 9, 17, 16, 9, 7, 14, 11, 14, 15, 13, 11, 10, 18, 13, 17, 17, 14, 17, 7, 9, 5, 10, 13, 8, 5, 18, 20, 7, 5, 5, 15, 19, 14], 22);
  expect(result).toEqual(272187084);
});
