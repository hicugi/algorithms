const { shortestWordDistance } = require("./shortestWordDistance.mjs");

describe("Official:", () => {
  test("Example 1", () => {
    const result = shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding");
    expect(result).toBe(1);
  });
  test("Example 2", () => {
    const result = shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "makes");
    expect(result).toBe(3);
  });

  test("Example 45", () => {
    const result = shortestWordDistance(["this", "is", "a", "long", "sentence", "fun", "day", "today", "sunny", "is", "weather", "a", "day", "tuesday", "this", "is", "sentence", "run", "running", "rainy", "is"], "is", "is");
    expect(result).toBe(5);
  });
});
