const { maxA } = require("./maxA.mjs");

describe("Official:", () => {
  test("Example 1", () => {
    const result = maxA(3);
    expect(result).toBe(3);
  });
  test("Example 1", () => {
    const result = maxA(7);
    expect(result).toBe(9);
  });
  test("Example 8", () => {
    const result = maxA(9);
    expect(result).toBe(16);
  });
  test("Example 9", () => {
    const result = maxA(8);
    expect(result).toBe(12);
  });
  test("Example 10", () => {
    const result = maxA(11);
    expect(result).toBe(27);
  });
  test("Example 19", () => {
    const result = maxA(10);
    expect(result).toBe(20);
  });
});
