const { mincostTickets } = require("./mincostTickets-v2.mjs");

describe("Custom:", () => {
  test("one day", () => {
    const result = mincostTickets([1], [2, 7, 15]);
    expect(result).toBe(2);
  });

  test("one week", () => {
    const result = mincostTickets([1, 2, 3, 4, 5, 6, 7], [2, 7, 15]);
    expect(result).toBe(7);
  });

  test("week price more than day", () => {
    const result = mincostTickets([1, 2, 3, 4, 5, 6, 7], [1, 10, 15]);
    expect(result).toBe(7);
  });

  test("week and couple more days", () => {
    const result = mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 10, 15]);
    expect(result).toBe(9);
  });

  test("montly", () => {
    const result = mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], [3, 10, 15]);
    expect(result).toBe(15);
  });
  test("montly with week", () => {
    const months = [...Array(30)].map((_, i) => i + 11);
    const result = mincostTickets([1, 2, ...months, 41, 42, 43], [2, 10, 50]);
    expect(result).toBe(54);
  });
});

describe("Official:", () => {
  test("Example 1", () => {
    const result = mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]);
    expect(result).toBe(11);
  });
  test("Example 2", () => {
    const result = mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]);
    expect(result).toBe(17);
  });
  test("Example 9", () => {
    const result = mincostTickets([6, 8, 9, 18, 20, 21, 23, 25], [2, 10, 41]);
    expect(result).toBe(16);
  });
  test("Example 21", () => {
    const result = mincostTickets([1, 4, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 27, 28], [3, 13, 45]);
    expect(result).toBe(44);
  });
});
