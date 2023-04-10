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
 * @return {boolean}
 */
const validate = (node, lower, upper) => {
  if (node == null) return true;

  if (lower < node.val && node.val < upper) {
    return validate(node.left, lower, node.val) && validate(node.right, node.val, upper);
  }

  return false;
};
const isValidBST = (root) => {
  return validate(root, -Infinity, Infinity);
};

module.exports = { isValidBST };
