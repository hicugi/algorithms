/**
 * @param {number[][]} mat
 * @return {number}
 */
function diagonalSum(mat) {
  let r = 0;
  const n = mat.length;

  for (let y = 0; y < n; y++) {
    const opY = n - 1 - y;

    for (let x = 0; x < n; x++) {
      if (y === x || opY === x) {
        r += mat[y][x];
      }
    }
  }
  return r;
}

module.exports = { diagonalSum };
