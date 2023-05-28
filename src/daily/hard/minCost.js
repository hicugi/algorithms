/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
function minCost(n, cuts) {
  if (cuts.length < 1) return n;

  cuts.sort((a, b) => a - b);

  var memo = {};

  function calc(n1, n2) {
    return Math.abs(n1 - n2);
  }

  function dfs(cutStart, cutEnd, ns, ne) {
    if (cutStart == cutEnd) return 0;

    var innerCuts = cuts.slice(cutStart, cutEnd);
    if (innerCuts.length === 0) return 0;
    if (innerCuts.length === 1) {
      return calc(ne, ns);
    }
    console.log({ innerCuts });

    var key = `${cutStart} ${cutEnd}`;

    if (memo[key]) return memo[key];
    memo[key] = n;

    var result = Infinity;
    for (var i = cutStart; i < cutEnd; i++) {
      var value = dfs(cutStart, i, ns, cuts[i]) + dfs(i + 1, cutEnd, cuts[i], ne);
      result = Math.min(result, value);
    }

    result += calc(ne, ns);
    return (memo[key] = result);
  }

  var res = dfs(0, cuts.length, 0, n);
  console.log(memo);
  return res;
}

module.exports = { minCost };
