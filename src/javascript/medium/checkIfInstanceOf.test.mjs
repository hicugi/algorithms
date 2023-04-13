const { checkIfInstanceOf } = require("./checkIfInstanceOf.mjs");

test("Example 1", () => {
  const result = checkIfInstanceOf(new Date(), Date);
  expect(result).toBe(true);
});
test("Example 2", () => {
  class Animal {}
  class Dog extends Animal {}

  const result = checkIfInstanceOf(new Dog(), Animal);
  expect(result).toBe(true);
});
test("Example 3", () => {
  const result = checkIfInstanceOf(Date, Date);
  expect(result).toBe(false);
});

test("Testcase 5", () => {
  const result = checkIfInstanceOf(5, Number);
  expect(result).toBe(true);
});
test("Testcase 6", () => {
  const result = checkIfInstanceOf(null, null);
  expect(result).toBe(false);
});
test("Testcase 16", () => {
  const result = checkIfInstanceOf(null, Array);
  expect(result).toBe(false);
});
test("Testcase 25", () => {
  const result = checkIfInstanceOf(undefined, []);
  expect(result).toBe(false);
});
test("Testcase 42", () => {
  const result = checkIfInstanceOf([], []);
  expect(result).toBe(false);
});
test("Testcase 305", () => {
  const result = checkIfInstanceOf(Symbol(), Symbol);
  expect(result).toBe(true);
});
test("Testcase 306", () => {
  const result = checkIfInstanceOf(Object, Object);
  expect(result).toBe(true);
});
