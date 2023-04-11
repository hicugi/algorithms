/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  let result;
  const nums = {
    [p]: p,
    [q]: q,
  };
  let prevItem;

  const validate = (elm, parents) => {
    if (result !== undefined) return result;
    if (!elm) return false;

    const { val, left, right } = elm;

    const leftRes = validate(left, [...parents, val]);
    const rightRes = validate(right, [...parents, val]);

    if (result !== undefined) return result;
    if (nums[val] !== undefined) {
      if (prevItem === undefined) {
        prevItem = [[...parents], val];
        return val;
      }

      result = (() => {
        const [prevParents, prevValue] = prevItem;

        if (parents.includes[prevValue]) return prevValue;
        if (prevParents.includes(val)) return val;

        for (let i = 0; parents[i] !== undefined || prevParents[i] !== undefined; i++) {
          if (i > 0 && parents[i] !== prevParents[i]) {
            return parents[i - 1];
          }
        }

        return parents[parents.length - 1];
      })();
      return result;
    }

    if (!leftRes && !rightRes) return nums[val];
    if (leftRes && rightRes) return val;

    return leftRes || rightRes;
  };

  return validate(root, []);
};

module.exports = {
  lowestCommonAncestor,
};
