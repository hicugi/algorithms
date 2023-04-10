const { lowestCommonAncestor } = require("./lowestCommonAncestor.mjs");

describe("Example", () => {
  test("1", () => {
    const result = lowestCommonAncestor({ val: 6, left: { val: 2, left: { val: 0, left: null, right: null }, right: { val: 4, left: { val: 3, left: null, right: null }, right: { val: 5, left: null, right: null } } }, right: { val: 8, left: { val: 7, left: null, right: null }, right: { val: 9, left: null, right: null } } }, 2, 8);
    expect(result).toEqual(6);
  });
  test("2", () => {
    const result = lowestCommonAncestor({ val: 6, left: { val: 2, left: { val: 0, left: null, right: null }, right: { val: 4, left: { val: 3, left: null, right: null }, right: { val: 5, left: null, right: null } } }, right: { val: 8, left: { val: 7, left: null, right: null }, right: { val: 9, left: null, right: null } } }, 2, 4);
    expect(result).toEqual(2);
  });
  test("3", () => {
    const result = lowestCommonAncestor({ val: 2, left: { val: 1, left: null, right: null }, right: null }, 2, 1);
    expect(result).toEqual(2);
  });
});

describe("Testcase", () => {
  test("20", () => {
    const result = lowestCommonAncestor({ val: 5, left: { val: 3, left: { val: 2, left: { val: 1, left: null, right: null }, right: null }, right: { val: 4, left: null, right: null } }, right: { val: 6, left: null, right: null } }, 1, 4);
    expect(result).toEqual(3);
  });
  test("25", () => {
    const result = lowestCommonAncestor({ val: 6, left: { val: 2, left: { val: 0, left: null, right: null }, right: { val: 4, left: { val: 3, left: null, right: null }, right: { val: 5, left: null, right: null } } }, right: { val: 8, left: { val: 7, left: null, right: null }, right: { val: 9, left: null, right: null } } }, 0, 8);
    expect(result).toEqual(6);
  });
  test("28", () => {
    const result = lowestCommonAncestor({ val: 6, left: { val: 2, left: { val: 0, left: null, right: null }, right: { val: 4, left: { val: 3, left: null, right: null }, right: { val: 5, left: null, right: null } } }, right: { val: 8, left: { val: 7, left: null, right: null }, right: { val: 9, left: null, right: null } } }, 3, 5);
    expect(result).toEqual(4);
  });
});
