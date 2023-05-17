/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function pairSum(head) {
  const list = [];
  let node = head;

  while (node) {
    list.push(node);
    node = node.next;
  }

  let res = 0;
  while (list.length) {
    res = Math.max(res, list[0].val + list[list.length - 1].val);
    list.shift();
    list.pop();
  }

  return res;
}

module.exports = { pairSum };
