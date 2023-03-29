/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = function (n, roads) {
  const connections = { 1: true, [n]: true };
  const missing = new Set();

  const checkRoad = (road) => {
    const [x, y, distance] = road;

    const xConnect = connections[x];
    const yConnect = connections[x];

    if (!xConnect && !yConnect) {
      missing;
      return;
    }
  };
};
