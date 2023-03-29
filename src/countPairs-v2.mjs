/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

const cacheProb = {};
const countProb = (v) => {
  if (cacheProb[v]) return cacheProb[v];
  cacheProb[v] = [...Array(v - 1)].reduce((r, _, i) => i + 1 + r, 0);
  return cacheProb[v];
};
const countPaths = (routes) => {
  const result = {};
  for (const value of Object.values(routes)) {
    result[value] = result[value] ? result[value] + 1 : 1;
  }
  return Object.values(result).reduce((r, v) => r + countProb(v), 0);
};

const mergeGroups = (groupNums, routes, x, y) => {
  const to = groupNums[x].length > groupNums[y].length ? x : y;
  const from = groupNums[x].length > groupNums[y].length ? y : x;

  if (from === to) return;

  groupNums[to].push(...groupNums[from]);
  groupNums[from].forEach((value) => {
    routes[value] = to;
  });
  delete groupNums[from];
};

function countPairs(n, edges) {
  let groupNum = 1;

  const routes = {};
  const groupNums = {};

  for (const route of edges) {
    const [x, y] = route;

    const groupX = routes[x];
    const groupY = routes[y];

    if (groupX && groupY) {
      mergeGroups(groupNums, routes, groupX, groupY);
      continue;
    }

    const group = groupX || groupY;
    if (group) {
      if (!groupX || !groupY) {
        routes[groupX ? y : x] = group;
        groupNums[group].push(groupX ? y : x);
      }
      continue;
    }

    routes[x] = groupNum;
    routes[y] = groupNum;
    groupNums[groupNum] = [x, y];
    groupNum += 1;
  }

  const paths = countPaths(routes);
  return countProb(n) - paths;
}
