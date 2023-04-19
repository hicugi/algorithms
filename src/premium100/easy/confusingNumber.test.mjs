const { confusingNumber } = require("./confusingNumber.mjs");

test("Example 1", () => {
  const result = confusingNumber(6);
  expect(result).toBe(true);
});
test("Example 2", () => {
  const result = confusingNumber(89);
  expect(result).toBe(true);
});
test("Example 3", () => {
  const result = confusingNumber(11);
  expect(result).toBe(false);
});
