/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const grid = new Array(m).fill(1).map((_) => new Array(n).fill(1));

  const getValue = (y, x) => (grid[y] || [])[x] || 1;

  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      grid[y][x] = getValue(y - 1, x) + getValue(y, x - 1);
    }
  }

  return grid[m - 1][n - 1];
};

module.exports = { uniquePaths };
