const { numberOfArrays } = require("./numberOfArrays.mjs");

test("Example 1", () => {
  const result = numberOfArrays("1000", 10000);
  expect(result).toEqual(1);
});
test("Example 2", () => {
  const result = numberOfArrays("1000", 10);
  expect(result).toEqual(0);
});
test("Example 3", () => {
  const result = numberOfArrays("1317", 2000);
  expect(result).toEqual(8);
});
