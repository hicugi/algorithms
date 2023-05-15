/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function swapNodes(head, k) {
  const list = [];
  let node = head;

  for (let i = 0; i < 1e5; i++) {
    list.push(node);
    if (node.next === null) break;
    node = node.next;
  }

  const n = list.length;
  const m = Math.round(n / 2);

  const sIndex = k < m ? k - 1 : n - k;
  const eIndex = k < m ? n - k : k - 1;

  const { val } = list[sIndex];
  list[sIndex].val = list[eIndex].val;
  list[eIndex].val = val;

  return head;
}

module.exports = { swapNodes };
