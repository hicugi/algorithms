const { maxSatisfaction } = require("./maxSatisfaction.mjs");

describe("Official:", () => {
  test("Example 1", () => {
    const result = maxSatisfaction([-1, -8, 0, 5, -9]);
    expect(result).toBe(14);
  });
  test("Example 2", () => {
    const result = maxSatisfaction([4, 3, 2]);
    expect(result).toBe(20);
  });
  test("Example 3", () => {
    const result = maxSatisfaction([-1, -4, -5]);
    expect(result).toBe(0);
  });
});
