const { levelOrder } = require("./levelOrder.mjs");

describe("Example:", () => {
  test("1", () => {
    const result = levelOrder({
      val: 3,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    });
    expect(result).toEqual([[3], [9, 20], [15, 7]]);
  });
  test("2", () => {
    const result = levelOrder({ val: 1, left: null, right: null });
    expect(result).toEqual([[1]]);
  });
  test("3", () => {
    const result = levelOrder(null);
    expect(result).toEqual([]);
  });
});

describe("Testcase:", () => {
  test("Testcase", () => {
    const result = levelOrder({
      val: 1,
      left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
      right: { val: 3, left: null, right: { val: 5, left: null, right: null } },
    });
    expect(result).toEqual([[1], [2, 3], [4, 5]]);
  });
  test("Testcase 10", () => {
    const result = levelOrder({
      val: 0,
      left: {
        val: 2,
        left: { val: 1, left: { val: 5, left: null, right: null }, right: { val: 1, left: null, right: null } },
        right: null,
      },
      right: {
        val: 4,
        left: { val: 3, left: null, right: { val: 6, left: null, right: null } },
        right: { val: -1, left: null, right: { val: 8, left: null, right: null } },
      },
    });
    expect(result).toEqual([[0], [2, 4], [1, 3, -1], [5, 1, 6, 8]]);
  });
  test("Testcase 21", () => {
    const result = levelOrder({
      val: -8,
      left: {
        val: 3,
        left: { val: -8, left: null, right: { val: -1, left: null, right: { val: 8, left: null, right: null } } },
        right: null,
      },
      right: {
        val: 0,
        left: null,
        right: null,
      },
    });
    expect(result).toEqual([[-8], [3, 0], [-8], [-1], [8]]);
  });
});
