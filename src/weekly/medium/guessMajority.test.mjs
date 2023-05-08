const { guessMajority } = require("./guessMajority.mjs");

class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  // Compares 4 different elements in the array
  // return 4 if the values of the 4 elements are the same (0 or 1).
  // return 2 if three elements have a value equal to 0 and one element has value equal to 1 or vice versa.
  // return 0 : if two element have a value equal to 0 and two elements have a value equal to 1.
  /**
   * @param {number} a, b, c, d
   * @return {number}
   */
  query(...idxes) {
    let diff = 0;

    for (let i = 0; i < 4; i++) {
      if (this.arr[idxes[i]]) diff++;
    }

    if ([0, 4].includes(diff)) return 0;
    if ([1, 3].includes(diff)) return 2;
    return 0;
  }

  // Returns the length of the array
  /**
   * @return {number}
   */

  length() {
    return this.arr.length;
  }
}

test("Example 1", () => {
  const arr = [0,0,1,1,0];
  const result = guessMajority(new ArrayReader(arr));
  expect(result).toEqual(0);
});
test("Example 2", () => {
  const arr = [1, 0, 1, 0, 1, 0, 1, 0];
  const result = guessMajority(new ArrayReader(arr));
  expect(result).toEqual(-1);
});
