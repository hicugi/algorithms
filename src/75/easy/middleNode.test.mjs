const { middleNode } = require("./middleNode.mjs");

describe("Custom:", () => {
  test("empty array", () => {
    const result = middleNode([]);
    expect(result).toEqual([]);
  });
  test("one element array", () => {
    const result = middleNode([1]);
    expect(result).toEqual([1]);
  });
});

describe("Official:", () => {
  test("Example 1", () => {
    const result = middleNode([1, 2, 3, 4, 5]);
    expect(result).toEqual([3, 4, 5]);
  });
  test("Example 2", () => {
    const result = middleNode([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([4, 5, 6]);
  });
});
