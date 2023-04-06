/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = (grid) => {
  let result = 0;
  let yLength = grid.length;
  let xLength = (grid[0] || []).length;

  if (xLength < 3 || yLength < 3) return 0;

  const checkNeighbours = (y, x) => {
    const isYKo = y < 0 || y >= yLength;
    const isXKo = x < 0 || x >= xLength;

    if (isYKo || isXKo) return 0;
    if (grid[y][x] === 1) return 1;

    grid[y][x] = 1;

    const left = checkNeighbours(y, x - 1);
    const right = checkNeighbours(y, x + 1);
    const top = checkNeighbours(y - 1, x);
    const bottom = checkNeighbours(y + 1, x);

    return left && right && top && bottom;
  };

  for (let y = 1; y < yLength - 1; y++) {
    for (let x = 1; x < xLength - 1; x++) {
      if (grid[y][x] === 0) {
        result += checkNeighbours(y, x);
      }
    }
  }

  return result;
};

module.exports = { closedIsland };
