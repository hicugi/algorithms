/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
class UnionFind {
  constructor(n) {
    const parents = [];
    for (let i = 0; i <= n; i++) {
      parents[i] = i;
    }

    this.edgesLeft = n;
    this.parents = parents;
  }

  find(n) {
    const { parents } = this;

    let res = parents[n];
    while (res !== parents[res]) {
      res = parents[res];
    }

    return res;
  }
  union(a, b) {
    const pa = this.find(a);
    const pb = this.find(b);
    if (pa === pb) return 0;

    const [parent, child] = [pa, pb].sort((v1, v2) => v1 - v2);
    this.parents[parent] = child;

    this.edgesLeft--;
    return 1;
  }
  isConnected() {
    return this.edgesLeft === 1;
  }
}

function maxNumEdgesToRemove(n, edges) {
  const alice = new UnionFind(n);
  const bob = new UnionFind(n);

  let edgesRequired = 0;

  for (let [type, a, b] of edges) {
    if (type !== 3) continue;
    edgesRequired += alice.union(a, b) | bob.union(a, b);
  }

  for (let [type, a, b] of edges) {
    if (type === 3) continue;
    edgesRequired += type === 1 ? alice.union(a, b) : bob.union(a, b);
  }

  if (!alice.isConnected() || !bob.isConnected()) return -1;
  return edges.length - edgesRequired;
}

module.exports = { maxNumEdgesToRemove };
