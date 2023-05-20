/**
 * @param {number[][]} graph
 * @return {boolean}
 */
function isBipartite(graph) {
  var memo = {};
  var stack;

  for (var i = 0; i < graph.length; i++) {
    if (memo[i] !== undefined) continue;

    memo[i] = false;
    stack = [i];

    while (stack.length) {
      var ni = stack.pop();

      for (var j = 0; j < graph[ni].length; j++) {
        var n = graph[ni][j];

        if (memo[n] === undefined) {
          stack.push(n);
          memo[n] = !memo[ni];
          continue;
        }
        if (memo[n] === memo[ni]) {
          return false;
        }
      }
    }
  }

  return true;
}

module.exports = { isBipartite };
