/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

const countProb = (v) => [...Array(v - 1)].reduce((r, _, i) => i + 1 + r, 0);
const countPaths = (routes) => routes.reduce((res, flow) => res + countProb(Object.keys(flow).length), 0);

function countPairs(n, edges) {
  const routes = edges.reduce((result, route) => {
    const [x, y] = route;

    const flows = result.filter((path) => path[x] || path[y]);

    if (flows.length > 1) {
      const index = Object.keys(flows[0]).length > Object.keys(flows[1]).length ? 0 : 1;
      const maxFlow = flows[index];
      const minFlow = flows[index ? 0 : 1];
      const minIndex = result.findIndex((item) => item === minFlow);

      Object.keys(minFlow).forEach((value) => (maxFlow[value] = "*"));
      result.splice(minIndex, 1);
      return result;
    }

    const [flow] = flows;
    if (flow) {
      if (!flow[x] || !flow[y]) {
        flow[flow[x] ? y : x] = "+";
      }
      return result;
    }

    result.push({ [x]: "-", [y]: "-" });

    return result;
  }, []);

  const paths = countPaths(routes);

  return countProb(n) - paths;
}
