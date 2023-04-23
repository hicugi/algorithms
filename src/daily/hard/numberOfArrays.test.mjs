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

test("Testcase 5", () => {
  const result = numberOfArrays("2020", 30);
  expect(result).toEqual(1);
});
test("Testcase 6", () => {
  const result = numberOfArrays("1234567890", 90);
  expect(result).toEqual(34);
});
