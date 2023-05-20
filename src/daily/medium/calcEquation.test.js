const { calcEquation } = require("./calcEquation.js");

test("Example 1", () => {
  const result = calcEquation(JSON.parse('[["a","b"],["b","c"]]'), [2.0, 3.0], JSON.parse('[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]'));
  expect(result).toEqual([6.0, 0.5, -1.0, 1.0, -1.0]);
});
test("Example 2", () => {
  const result = calcEquation(JSON.parse('[["a","b"],["b","c"],["bc","cd"]]'), [1.5, 2.5, 5.0], JSON.parse('[["a","c"],["c","b"],["bc","cd"],["cd","bc"]]'));
  expect(result).toEqual([3.75, 0.4, 5.0, 0.2]);
});
test("Example 3", () => {
  const result = calcEquation(JSON.parse('[["a","b"]]'), [0.5], JSON.parse('[["a","b"],["b","a"],["a","c"],["x","y"]]'));
  expect(result).toEqual([0.5, 2.0, -1.0, -1.0]);
});
