/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

const countProb = (v) => [...Array(v - 1)].reduce((r, _, i) => i + 1 + r, 0);
const countPaths = (paths) => paths.reduce((r, v) => r + countProb(v.length), 0);

const mergeGroups = (items, [x, y]) => {
  const isXLarger = Object.keys(items[x]).length > Object.keys(items[y]).length ? 0 : 1;

  Object.assign(items[isXLarger ? x : y], items[isXLarger ? y : x]);
  items.splice(isXLarger ? y : x, 1);
};

function countPairs(n, edges) {
  const groups = [];

  main: for (const [x, y] of edges) {
    const groupPathIndexes = [];

    for (let i = 0; i < groups.length; i++) {
      const isX = groups[i][x];
      const isY = groups[i][y];

      if (isX && isY) continue main;
      if (isX) groupPathIndexes.push(i);
      if (isY) groupPathIndexes.push(i);
      if (groupPathIndexes.length > 1) continue;
    }

    if (groupPathIndexes.length > 1) {
      mergeGroups(groups, groupPathIndexes);
      continue;
    }

    const paths = groups[groupPathIndexes[0]];
    if (paths) {
      const isX = paths[x];

      if (!isX || !paths[y]) {
        paths[isX ? y : x] = true;
      }
      continue;
    }

    groups.push({ [x]: true, [y]: true });
  }

  const pathsNum = countPaths(groups.map(Object.keys));
  return countProb(n) - pathsNum;
}
