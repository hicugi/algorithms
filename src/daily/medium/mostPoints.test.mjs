const { mostPoints } = require("./mostPoints.mjs");
const lteData = require("./mostPoints.lte.json");

test("Example 1", () => {
  const result = mostPoints(JSON.parse("[[3,2],[4,3],[4,4],[2,5]]"));
  expect(result).toBe(5);
});
test("Example 2", () => {
  const result = mostPoints(JSON.parse("[[1,1],[2,2],[3,3],[4,4],[5,5]]"));
  expect(result).toBe(7);
});

test("Testcase 28", () => {
  const result = mostPoints(JSON.parse("[[21,5],[92,3],[74,2],[39,4],[58,2],[5,5],[49,4],[65,3]]"));
  expect(result).toBe(157);
});
test("Testcase 45", () => {
  const result = mostPoints(lteData);
  expect(result).toBe(285007);
});
