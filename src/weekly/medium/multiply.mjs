/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
function multiply(mat1, mat2) {
  const result = new Array(mat1.length).fill().map(() => new Array(mat2[0].length).fill(0));

  for (let y = 0; y < mat1.length; y++) {
    for (let x = 0; x < mat1[0].length; x++) {
      if (!mat1[y][x]) continue;

      for (let x2 = 0; x2 < mat2[x].length; x2++) {
        result[y][x2] += mat1[y][x] * mat2[x][x2];
      }
    }
  }

  return result;
}

module.exports = { multiply };
