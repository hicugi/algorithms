const { average } = require("./average.mjs");

test("Example 1", () => {
  const result = average(JSON.parse("[4000,3000,1000,2000]"));
  expect(result).toBe(2500.0);
});
test("Example 2", () => {
  const result = average(JSON.parse("[1000,2000,3000]"));
  expect(result).toBe(2000.0);
});
