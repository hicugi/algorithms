const { minCostClimbingStairs } = require("./minCostClimbingStairs.mjs");

describe("Custom", () => {
  test("skip stairds", () => {
    const result = minCostClimbingStairs([1]);
    expect(result).toBe(0);
  });
  test("one stair 1", () => {
    const result = minCostClimbingStairs([1, 2]);
    expect(result).toBe(1);
  });
  test("one stair 2", () => {
    const result = minCostClimbingStairs([2, 1]);
    expect(result).toBe(1);
  });
});

describe("Testcase", () => {
  test("Example 1", () => {
    const result = minCostClimbingStairs([10, 15, 20]);
    expect(result).toBe(15);
  });
  test("Example 2", () => {
    const result = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
    expect(result).toBe(6);
  });
});
