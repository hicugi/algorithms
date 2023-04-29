class UnionFind {
  constructor(size) {
    this.group = [];
    this.rank = [];
    for (let i = 0; i < size; ++i) {
      this.group[i] = i;
    }
  }

  find(node) {
    if (this.group[node] !== node) {
      this.group[node] = this.find(this.group[node]);
    }
    return this.group[node];
  }

  join(node1, node2) {
    let group1 = this.find(node1);
    let group2 = this.find(node2);

    if (group1 === group2) return;

    if (this.rank[group1] > this.rank[group2]) {
      this.group[group2] = group1;
    } else if (this.rank[group1] < this.rank[group2]) {
      this.group[group1] = group2;
    } else {
      this.group[group1] = group2;
      this.rank[group2] += 1;
    }
  }

  areConnected(node1, node2) {
    return this.find(node1) === this.find(node2);
  }
}

function distanceLimitedPathsExist(n, edgeList, queries) {
  const uf = new UnionFind(n);

  edgeList.sort((a, b) => a[2] - b[2]);

  queries.forEach((query, i) => query.push(i));
  queries.sort((a, b) => a[2] - b[2]);

  const result = new Array(queries.length);

  let edgesIndex = 0;
  queries.forEach(([p, q, limit, queryOriginalIndex]) => {
    while (edgesIndex < edgeList.length && edgeList[edgesIndex][2] < limit) {
      uf.join(edgeList[edgesIndex][0], edgeList[edgesIndex][1]);
      edgesIndex += 1;
    }

    result[queryOriginalIndex] = uf.areConnected(p, q);
  });

  return result;
}
