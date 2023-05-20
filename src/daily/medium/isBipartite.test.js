const { isBipartite } = require("./isBipartite.js");

test("Example 1", () => {
  const result = isBipartite(JSON.parse('[[1,2,3],[0,2],[0,1,3],[0,2]]'));
  expect(result).toBe(false);
});
test("Example 2", () => {
  const result = isBipartite(JSON.parse('[[1,3],[0,2],[1,3],[0,2]]'));
  expect(result).toBe(true);
});
