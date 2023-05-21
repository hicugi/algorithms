/**
 * @param {number[][]} grid
 * @return {number}
 */
function getKey(y, x) {
  return `${y} ${x}`;
}

function getLand(grid, y, x) {
  var result = {};
  var memo = {};
  var stack = [];

  stack.push([y, x]);

  function insert(y, x) {
    if (memo[getKey(y, x)]) return;
    memo[getKey(y, x)] = true;

    if (grid[y] && grid[y][x]) {
      stack.push([y, x]);
    }
  }

  while (stack.length) {
    var [y, x] = stack.shift();

    result[getKey(y, x)] = true;

    insert(y, x + 1);
    insert(y, x - 1);
    insert(y + 1, x);
    insert(y - 1, x);
  }

  return result;
}

function shortestBridge(grid) {
  var lands = [];

  // get lands locations
  for (var y = 0; y < grid.length; y++) {
    for (var x = 0; x < grid[y].length; x++) {
      if (grid[y][x] == 0) continue;
      if (lands.length == 2) break;
      if (lands.length && lands[0][`${y} ${x}`]) continue;

      lands.push(getLand(grid, y, x));
    }
  }

  var result = 0;
  var memo = {};
  var stack = [Object.keys(lands[0])];
  var land2 = lands[1];

  function assign(obj, y, x) {
    if (memo[getKey(y, x)] || lands[0][getKey(y, x)]) return false;
    if ((grid[y] || [])[x] !== 0) return;

    memo[getKey(y, x)] = true;
    obj[getKey(y, x)] = true;
  }

  while (stack.length) {
    var loc = stack.shift();
    var nextStack = {};

    for (var i = 0; i < loc.length; i++) {
      var [y, x] = loc[i].split(" ");

      if (land2[getKey(y - 1, x)] || land2[getKey(+y + 1, x)] || land2[getKey(y, x - 1)] || land2[getKey(y, +x + 1)]) return result;

      assign(nextStack, y - 1, x);
      assign(nextStack, +y + 1, x);
      assign(nextStack, y, x - 1);
      assign(nextStack, y, +x + 1);
    }

    const keys = Object.keys(nextStack);

    if (keys.length) {
      stack.push(keys);
      result++;
    }
  }

  return -1;
}

module.exports = { shortestBridge };
