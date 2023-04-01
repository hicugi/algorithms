const { search } = require("./search.mjs");

describe("Official:", () => {
  test("Example 1", () => {
    const result = search([-1, 0, 3, 5, 9, 12], 9);
    expect(result).toBe(4);
  });
  test("Example 2", () => {
    const result = search([-1, 0, 3, 5, 9, 12], 2);
    expect(result).toBe(-1);
  });
});
