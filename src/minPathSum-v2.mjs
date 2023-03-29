/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const sumPaths = (y, x) => {
    if (grid[y + 1] !== undefined && grid[y][x + 1] !== undefined) {
      grid[y][x] += grid[y][x + 1] < grid[y + 1][x] ? grid[y][x + 1] : grid[y + 1][x];
      return;
    }
    if (grid[y + 1] !== undefined) {
      grid[y][x] += grid[y + 1][x];
    }
    if (grid[y][x + 1] !== undefined) {
      grid[y][x] += grid[y][x + 1];
    }
  };

  for (let y = grid.length - 1; y >= 0; y--) {
    for (let x = grid[y].length - 1; x >= 0; x--) {
      sumPaths(y, x);
    }
  }

  return grid[0][0];
};

module.exports = { minPathSum };
