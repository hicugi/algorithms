/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  let finalResult;

  const newPaths = [];
  let location = [0, 0];

  let result = grid[0][0];

  const checkNextPath = () => {
    let [y, x] = location;
    const isNextY = grid[y + 1];
    const isNextX = grid[y][x + 1] !== undefined;

    if (!isNextY && !isNextX) {
      if (!newPaths.length) return;

      const [ny, nx, nResult] = newPaths.shift();
      result = nResult + grid[ny][nx];

      if (result < finalResult) {
        location = [ny, nx];
      }
      return checkNextPath();
    }

    if (isNextX) {
      if (isNextY) {
        newPaths.push([y + 1, x, result]);
      }

      x += 1;
      location[1] += 1;
    } else if (isNextY) {
      if (isNextX) {
        newPaths.push([y, x + 1, result]);
      }

      y += 1;
      location[0] += 1;
    }

    const value = (grid[y] || [])[x];

    if (value === undefined) return;

    result += value;

    if (finalResult && result > finalResult) {
      location = [grid.length - 1, grid[0].length - 1];
      return checkNextPath();
    }

    // end
    if (grid[y + 1] === undefined && grid[y][x + 1] === undefined) {
      finalResult = result;
      return checkNextPath();
    }

    checkNextPath();
  };

  checkNextPath();

  return finalResult || result;
};

module.exports = { minPathSum };
