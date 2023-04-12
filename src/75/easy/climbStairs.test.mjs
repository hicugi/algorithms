const { climbStairs } = require("./climbStairs.mjs");

describe("Testcase", () => {
  test("1", () => {
    const result = climbStairs(3);
    expect(result).toEqual(3);
  });
  test("2", () => {
    const result = climbStairs(2);
    expect(result).toEqual(2);
  });
  test("45", () => {
    const result = climbStairs(2);
    expect(result).toEqual(2);
  });
});

describe("Custom", () => {
  test("1", () => {
    const result = climbStairs(1);
    expect(result).toEqual(1);
  });
  test("2", () => {
    const result = climbStairs(4);
    expect(result).toEqual(5);
  });
  test("3", () => {
    const result = climbStairs(5);
    expect(result).toEqual(8);
  });
  test("4", () => {
    const result = climbStairs(10);
    expect(result).toEqual(89);
  });
  test("5", () => {
    const result = climbStairs(11);
    expect(result).toEqual(144);
  });
  test("6", () => {
    const result = climbStairs(12);
    expect(result).toEqual(233);
  });
});
