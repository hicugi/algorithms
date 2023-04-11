/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  const checkArea = (y, x) => {
    const char = (grid[y] || [])[x];

    if (char === undefined) return 1;
    if (char === "0") return 0;

    grid[y][x] = "0";

    checkArea(y, x - 1);
    checkArea(y, x + 1);
    checkArea(y - 1, x);
    checkArea(y + 1, x);

    return 1;
  };

  let result = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      result += checkArea(y, x);
    }
  }

  return result;
};

module.exports = { numIslands };
