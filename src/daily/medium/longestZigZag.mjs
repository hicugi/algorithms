/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const paths = {
  left: "right",
  right: "left",
};

const longestZigZag = ({ left, right }) => {
  let result = 0;

  const countPaths = (root, path, count) => {
    if (!root) return;

    countPaths(root[paths[path]], paths[path], count + 1); // ZigZag path
    countPaths(root[path], path, 1); // new path

    result = Math.max(result, count);

    return;
  };

  countPaths(left, "left", 1);
  countPaths(right, "right", 1);

  return result;
};

module.exports = { longestZigZag };
