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
 * @return {number[][]}
 */
const levelOrder = (root) => {
  const result = [];

  const getSideValues = ({ left, right }, index = 1) => {
    [left, right]
      .filter((item) => item?.val || item?.val === 0)
      .forEach((item) => {
        if (result[index] === undefined) {
          result[index] = [];
        }

        result[index].push(item.val);
        getSideValues(item, index + 1);
      });
  };

  if (root) {
    const { val } = root;
    result.push([val]);

    getSideValues(root);
  }

  return result;
};

module.exports = { levelOrder };
