/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
function distanceLimitedPathsExist(n, edgeList, queries) {
  const group = new Array(n).fill().map((_, i) => i);
  const rank = new Array(n).fill(0);

  function find(i) {
    if (group[i] !== i) {
      group[i] = find(group[i]);
    }
    return group[i];
  }
  function join(i, j) {
    const g1 = find(i);
    const g2 = find(j);

    if (g1 === g2) return;

    if (rank[g1] > rank[g2]) group[g2] = g1;
    else if (rank[g1] < rank[g2]) group[g1] = g2;
    else {
      group[g1] = g2;
      rank[g2] += 1;
    }
  }
  const connected = (i, j) => find(i) === find(j);

  queries.forEach((elm, i) => {
    elm.index = i;
  });

  edgeList.sort(([, , a], [, , b]) => a - b);
  queries.sort(([, , a], [, , b]) => a - b);

  let edgeIndex = 0;
  const result = [];

  for (let query of queries) {
    const [qa, qb, limit] = query;

    for (let j = edgeIndex; j < edgeList.length; j++) {
      const [a, b, dis] = edgeList[j];

      if (dis < limit) {
        join(a, b);
        edgeIndex++;
      }
    }

    result[query.index] = connected(qa, qb);
  }

  return result;
}

module.exports = { distanceLimitedPathsExist };
