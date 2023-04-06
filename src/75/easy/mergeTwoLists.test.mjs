const { mergeTwoLists } = require("./mergeTwoLists.mjs");

test("Example 1", () => {
  const result = mergeTwoLists([1, 2, 4], [1, 3, 4]);
  expect(result.join("|")).toBe([1, 1, 2, 3, 4, 4].join("|"));
});
test("Example 2", () => {
  const result = mergeTwoLists([], []);
  expect(result.join("|")).toBe("");
});
test("Example 3", () => {
  const result = mergeTwoLists([], [0]);
  expect(result.join("|")).toBe("0");
});
