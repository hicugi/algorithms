const { isValidBST } = require("./isValidBST.mjs");

describe("Custom", () => {
  test("valid flow", () => {
    const result = isValidBST({
      val: 7,
      left: {
        val: 3,
        left: { val: 1, left: { val: 0, left: null, right: null }, right: { val: 2, left: null, right: null } },
        right: { val: 5, left: { val: 4, left: null, right: null }, right: { val: 6, left: null, right: null } },
      },
      right: {
        val: 11,
        left: { val: 9, left: { val: 8, left: null, right: null }, right: { val: 10, left: null, right: null } },
        right: { val: 13, left: { val: 12, left: null, right: null }, right: { val: 14, left: null, right: null } },
      },
    });
    expect(result).toEqual(true);
  });
});

describe("Example", () => {
  test("simple", () => {
    const result = isValidBST({ val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } });
    expect(result).toEqual(true);
  });
});
describe("Testcase", () => {
  test("38", () => {
    const result = isValidBST({ val: 2, left: { val: 2, left: null, right: null }, right: { val: 2, left: null, right: null } });
    expect(result).toEqual(false);
  });
  test("41", () => {
    const result = isValidBST({ val: 5, left: { val: 1, left: null, right: null }, right: { val: 4, left: { val: 3, left: null, right: null }, right: { val: 6, left: null, right: null } } });
    expect(result).toEqual(false);
  });
  test("55", () => {
    const result = isValidBST({ val: 3, left: { val: 1, left: { val: 0, left: null, right: null }, right: { val: 2, left: null, right: null } }, right: { val: 5, left: { val: 4, left: null, right: null }, right: { val: 6, left: null, right: null } } });
    expect(result).toEqual(true);
  });
  test("64", () => {
    const result = isValidBST({ val: 1, left: { val: 1, left: null, right: null } });
    expect(result).toEqual(false);
  });
  test("65", () => {
    const result = isValidBST({ val: 32, left: { val: 26, left: { val: 19, left: null, right: { val: 27, left: null, right: null } }, right: null }, right: { val: 47, left: null, right: { val: 56, left: null, right: null } } });
    expect(result).toEqual(false);
  });
  test("74", () => {
    const result = isValidBST({ val: 5, left: { val: 4, left: null, right: null }, right: { val: 6, left: { val: 3, left: null, right: null }, right: { val: 7, left: null, right: null } } });
    expect(result).toEqual(false);
  });
});
