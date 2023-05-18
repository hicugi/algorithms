/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findSmallestSetOfVertices(n, edges) {
  const numsDic = {};
  const memo = {};

  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];

    memo[b] = true;

    if (!memo[a]) {
      numsDic[a] = true;
    }
    if (numsDic[b]) {
      delete numsDic[b];
    }
  }

  return Object.keys(numsDic).map(Number);
}

module.exports = { findSmallestSetOfVertices };
