const { isScramble } = require("./isScramble.mjs");

describe("Official:", () => {
  test("Example 1", () => {
    const result = isScramble("great", "rgeat");
    expect(result).toBe(true);
  });
  test("Example 2", () => {
    const result = isScramble("abcde", "caebd");
    expect(result).toBe(false);
  });
  test("Example 3", () => {
    const result = isScramble("a", "a");
    expect(result).toBe(true);
  });

  test("Example 6 (time limit)", () => {
    const result = isScramble("abcdbdacbdac", "bdacabcdbdac");
    expect(result).toBe(true);
  });

  test("Example 150", () => {
    const result = isScramble("abcd", "acbd");
    expect(result).toBe(true);
  });
  test("Example 169", () => {
    const result = isScramble("abca", "caba");
    expect(result).toBe(true);
  });
  test("Example 170", () => {
    const result = isScramble("abc", "acb");
    expect(result).toBe(true);
  });
  test("Example 197", () => {
    const result = isScramble("abcd", "abdc");
    expect(result).toBe(true);
  });
});
