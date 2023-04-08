/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
  if (!node) return [];

  const result = [];
  const history = {};

  const getVal = (item) => {
    if (history[item?.val] === item) return;

    const { val, neighbors } = item;
    history[val] = item;

    const index = result.length;
    result[index] = [];

    neighbors.forEach((nextItem) => {
      if (!nextItem) return;

      result[index].push(nextItem);
      getVal(nextItem);
    });
  };

  getVal(node);

  return result;
};

module.exports = { cloneGraph };
