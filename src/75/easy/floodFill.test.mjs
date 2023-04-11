const { floodFill } = require("./floodFill.mjs");

describe("Example", () => {
  test("1", () => {
    const result = floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    );
    expect(result).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);
  });
  test("2", () => {
    const result = floodFill(
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      0,
      0,
      0
    );
    expect(result).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
});

describe("Testcase", () => {
  test("38", () => {
    const result = floodFill(
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      1,
      0,
      2
    );
    expect(result).toEqual([
      [2, 2, 2],
      [2, 2, 2],
    ]);
  });
  test("144", () => {
    const result = floodFill(
      [
        [0, 0, 0],
        [0, 1, 0],
      ],
      1,
      1,
      2
    );
    expect(result).toEqual([
      [0, 0, 0],
      [0, 2, 0],
    ]);
  });
});
