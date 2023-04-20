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
const widthOfBinaryTree = (root) => {
  if (!root) return 0;

  const levels = [0];
  let maxWidth = 0;

  const checkNode = (node, level, pos) => {
    if (!node) return;
    if (levels[level] === undefined) levels.push(pos);

    const value = pos - levels[level];

    maxWidth = Math.max(maxWidth, value + 1);

    checkNode(node.left, level + 1, value * 2);
    checkNode(node.right, level + 1, value * 2 + 1);
  };

  checkNode(root, 0, 0);

  return maxWidth;
};

module.exports = { widthOfBinaryTree };
