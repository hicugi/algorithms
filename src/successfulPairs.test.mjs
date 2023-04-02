const { successfulPairs } = require("./successfulPairs.mjs");

describe("Official:", () => {
  test("Example 1", () => {
    const result = successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7);
    expect(result).toEqual(expect.arrayContaining([4, 0, 3]));
  });
  test("Example 2", () => {
    const result = successfulPairs([3, 1, 2], [8, 5, 8], 16);
    expect(result).toEqual(expect.arrayContaining([2, 0, 2]));
  });
});
