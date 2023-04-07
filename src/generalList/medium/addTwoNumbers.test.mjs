const { addTwoNumbers } = require("./addTwoNumbers.mjs");

const compare = (result, toBeResult) => expect(result.join("|")).toBe(toBeResult.join("|"));

test("Example 1", () => {
  const result = addTwoNumbers([2, 4, 3], [5, 6, 4]);
  compare(result, [7, 0, 8]);
});
test("Example 2", () => {
  const result = addTwoNumbers([0], [0]);
  compare(result, [0]);
});
test("Example 3", () => {
  const result = addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
  compare(result, [8, 9, 9, 9, 0, 0, 0, 1]);
});

test("Testcase 21", () => {
  const result = addTwoNumbers([2, 4, 9], [5, 6, 4, 9]);
  compare(result, [7, 0, 4, 0, 1]);
});
