const { numRescueBoats } = require("./numRescueBoats.mjs");

describe("Official:", () => {
  test("Example 1", () => {
    const result = numRescueBoats([1, 2], 3);
    expect(result).toBe(1);
  });
  test("Example 2", () => {
    const result = numRescueBoats([3, 2, 2, 1], 3);
    expect(result).toBe(3);
  });
  test("Example 2", () => {
    const result = numRescueBoats([3, 5, 3, 4], 5);
    expect(result).toBe(4);
  });

  test("Testcase 33", () => {
    const result = numRescueBoats([3, 8, 7, 1, 4], 9);
    expect(result).toBe(3);
  });
  test("Testcase 34", () => {
    const result = numRescueBoats([5, 1, 4, 2], 6);
    expect(result).toBe(2);
  });
});
