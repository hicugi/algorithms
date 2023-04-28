const { bulbSwitch } = require("./bulbSwitch.mjs");

test("Example 1", () => {
  const result = bulbSwitch(3);
  expect(result).toEqual(1);
});
test("Example 2", () => {
  const result = bulbSwitch(0);
  expect(result).toEqual(0);
});
test("Example 3", () => {
  const result = bulbSwitch(1);
  expect(result).toEqual(1);
});

test("Testcase 8", () => {
  const result = bulbSwitch(8);
  expect(result).toEqual(2);
});
