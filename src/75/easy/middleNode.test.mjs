const { middleNode } = require("./middleNode.mjs");

describe("Custom:", () => {
  test("empty array", () => {
    const result = middleNode([]);
    expect(result.join(",")).toBe([].join(","));
  });
  test("one element array", () => {
    const result = middleNode([1]);
    expect(result.join(",")).toBe([1].join(","));
  });
});

describe("Official:", () => {
  test("Example 1", () => {
    const result = middleNode([1, 2, 3, 4, 5]);
    expect(result.join(",")).toBe([3, 4, 5].join(","));
  });
  test("Example 2", () => {
    const result = middleNode([1, 2, 3, 4, 5, 6]);
    expect(result.join(",")).toBe([4, 5, 6].join(","));
  });
});
