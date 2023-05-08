/**
 * // This is the reader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function reader() {
 *     // Compares 4 different elements in the array
 *     // return 4 if the values of the 4 elements are the same (0 or 1).
 *     // return 2 if three elements have a value equal to 0 and one element has value equal to 1 or vice versa.
 *     // return 0 : if two element have a value equal to 0 and two elements have a value equal to 1.
 *     @param {number} a, b, c, d
 *     @return {number}
 *     this.query = function(a, b, c, d) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {reader} reader
 * @return {number}
 */
function guessMajority(reader) {
  equal = 1;
  differ = 0;
  differIndex = -1;

  function f(isEqual, i) {
    if (isEqual) {
      equal++;
    } else {
      differ++;
      differIndex = i;
    }
  }

  const arr0123 = reader.query(0, 1, 2, 3);
  const arr1234 = reader.query(1, 2, 3, 4);
  f(arr1234 == arr0123, 4);

  for (let i = 5; i < reader.length(); i++) {
    f(reader.query(1, 2, 3, i) == arr0123, i);
  }

  f(reader.query(0, 2, 3, 4) == arr1234, 1);
  f(reader.query(0, 1, 3, 4) == arr1234, 2);
  f(reader.query(0, 1, 2, 4) == arr1234, 3);

  return equal > differ ? 0 : differ > equal ? differIndex : -1;
}

module.exports = { guessMajority };
