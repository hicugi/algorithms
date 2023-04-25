const { SmallestInfiniteSet } = require("./SmallestInfiniteSet.mjs");

test("Example 1", () => {
  const obj = new SmallestInfiniteSet();
  const result = [obj.addBack(2), obj.popSmallest(), obj.popSmallest(), obj.popSmallest(), obj.addBack(1), obj.popSmallest(), obj.popSmallest(), obj.popSmallest()];

  expect(result).toEqual([null, 1, 2, 3, null, 1, 4, 5]);
});

test("Testcase 83", () => {
  const obj = new SmallestInfiniteSet();
  const result = [
    obj.popSmallest(),
    obj.addBack(1),
    obj.popSmallest(),
    obj.popSmallest(),
    obj.popSmallest(),
    obj.addBack(2),
    obj.addBack(3),
    obj.popSmallest(),
    obj.popSmallest(),
  ];

  expect(result).toEqual([1, null, 1, 2, 3, null, null, 2, 3]);
});
