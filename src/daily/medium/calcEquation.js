/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function backtrackEvaluate(memo, a, b, n, visited = {}) {
  var result = -1.0;
  var neighbords = memo[a];

  visited[a] = true;

  if (neighbords[b]) {
    return n * neighbords[b];
  }
  const entries = Object.entries(neighbords);
  for (let i = 0; i < entries.length; i++) {
    const [c, value] = entries[i];
    if (visited[c]) continue;

    result = backtrackEvaluate(memo, c, b, n * value, visited);
    if (result !== -1) break;
  }

  delete visited[a];
  return result;
}

function calcEquation(equations, values, queries) {
  var memo = {};
  for (var i = 0; i < equations.length; i++) {
    var [a, b] = equations[i];
    var v = values[i];

    if (!memo[a]) memo[a] = {};
    if (!memo[b]) memo[b] = {};

    memo[a][b] = v;
    memo[b][a] = 1 / v;
  }

  var results = [];
  for (var i = 0; i < queries.length; i++) {
    var [a, b] = queries[i];

    if (!memo[a] || !memo[b]) {
      results.push(-1.0);
      continue;
    }

    if (a === b) {
      results.push(1.0);
      continue;
    }

    results.push(backtrackEvaluate(memo, a, b, 1));
  }

  return results;
}

module.exports = { calcEquation };
