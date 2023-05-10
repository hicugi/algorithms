/**
 * @param {number} n
 * @return {number[][]}
 */

const rotations = {
  right: "bot",
  bot: "left",
  left: "top",
  top: "right",
};

const generateMatrix = function (n) {
  if (!(n > 0)) return [];

  const matrix = [...Array(n)].map((_) => JSON.parse("[]"));

  let path = "right";
  let [y, x] = [0, 0];

  const checkNextStep = {
    right: () => x + 1 < n && !matrix[y][x + 1],
    bot: () => y + 1 < n && !matrix[y + 1][x],
    left: () => x > 0 && !matrix[y][x - 1],
    top: () => y > 0 && !matrix[y - 1][x],
  };
  const changeDirection = () => (path = rotations[path]);
  const updatePosition = {
    right: () => (checkNextStep.right() ? (x += 1) : changeDirection() && updatePosition[path]()),
    bot: () => (checkNextStep.bot() ? (y += 1) : changeDirection() && updatePosition[path]()),
    left: () => (checkNextStep.left() ? (x -= 1) : changeDirection() && updatePosition[path]()),
    top: () => (checkNextStep.top() ? (y -= 1) : changeDirection() && updatePosition[path]()),
  };

  for (let i = 0; i < n * n; i++) {
    matrix[y][x] = i + 1;

    if (i + 1 !== n * n) {
      updatePosition[path]();
    }
  }

  return matrix;
};

module.exports = { generateMatrix };
