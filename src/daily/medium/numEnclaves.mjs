/**
 * @param {number[][]} grid
 * @return {number}
 */
const numEnclaves = (grid) => {
  if (grid.length < 3 || grid[0].length < 3) return 0;

  const yLength = grid.length;
  const xLength = grid[0].length;

  // cover sides
  (() => {
    const fillNeighbours = (y, x) => {
      const value = (grid[y] || [])[x];
      if (value === undefined || value === 0) return;

      grid[y][x] = 0;

      fillNeighbours(y, x - 1); // left
      fillNeighbours(y, x + 1); // right
      fillNeighbours(y - 1, x); // top
      fillNeighbours(y + 1, x); // bot
    };

    // left & right
    for (let y = 0; y < yLength; y++) {
      fillNeighbours(y, 0);
      fillNeighbours(y, xLength - 1);
    }
    // top & bot
    for (let x = 0; x < xLength; x++) {
      fillNeighbours(0, x);
      fillNeighbours(yLength - 1, x);
    }
  })();

  // count leftover lands
  let result = 0;
  for (let y = 1; y < yLength - 1; y++) {
    for (let x = 1; x < xLength - 1; x++) {
      if (grid[y][x] === 1) {
        result += 1;
      }
    }
  }

  return result;
};

module.exports = { numEnclaves };
