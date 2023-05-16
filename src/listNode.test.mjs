const { listNode } = require("./listNode.mjs");

test("Test simple", () => {
  const result = listNode([1, 2, 3]);
  expect(result).toEqual({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null,
      },
    },
  });
});
test("Test empty", () => {
  const result = listNode([]);
  expect(result).toEqual({});
});
