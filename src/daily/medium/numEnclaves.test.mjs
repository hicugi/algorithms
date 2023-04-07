const { numEnclaves } = require("./numEnclaves.mjs");

describe("Custome:", () => {
  test("minimum requirements passed", () => {
    const result = numEnclaves([
      [1, 1],
      [1, 1],
    ]);
    expect(result).toBe(0);
  });
});

describe("Official:", () => {
  test("Example 1", () => {
    const result = numEnclaves([
      [0, 0, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]);
    expect(result).toBe(3);
  });
  test("Example 2", () => {
    const result = numEnclaves([
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ]);
    expect(result).toBe(0);
  });
  test("Example 49", () => {
    const result = numEnclaves([
      [0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
      [0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0],
      [1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    ]);
    expect(result).toBe(8);
  });
});
