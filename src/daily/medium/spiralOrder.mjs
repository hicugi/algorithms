/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const DIR = {
  R: "R",
  D: "D",
  L: "L",
  U: "U",
};
const TURN = {
  R: DIR.D,
  D: DIR.L,
  L: DIR.U,
  U: DIR.R,
};

function spiralOrder(matrix) {
  const walls = {
    [DIR.R]: matrix[0].length,
    [DIR.D]: matrix.length,
    [DIR.L]: -1,
    [DIR.U]: -1,
  };

  let dir = DIR.R;
  const currentPos = [0, 0];
  const getValue = () => matrix[currentPos[0]][currentPos[1]];

  const result = [];
  while (result.length < matrix.length * matrix[0].length) {
    result.push(getValue());

    if (dir === DIR.R && currentPos[1] + 1 === walls[DIR.R]) {
      dir = TURN[dir];
      walls[DIR.U]++;
    }
    if (dir === DIR.D && currentPos[0] + 1 === walls[DIR.D]) {
      dir = TURN[dir];
      walls[DIR.R]--;
    }
    if (dir === DIR.L && currentPos[1] - 1 === walls[DIR.L]) {
      dir = TURN[dir];
      walls[DIR.D]--;
    }
    if (dir === DIR.U && currentPos[0] - 1 === walls[DIR.U]) {
      dir = TURN[dir];
      walls[DIR.L]++;
    }

    if (dir === DIR.R) currentPos[1]++;
    if (dir === DIR.D) currentPos[0]++;
    if (dir === DIR.L) currentPos[1]--;
    if (dir === DIR.U) currentPos[0]--;
  }

  return result;
}

module.exports = { spiralOrder };
