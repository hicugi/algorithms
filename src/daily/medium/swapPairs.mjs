/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  function swap(node) {
    if (!node) return null;
    if (!node.next) return node;

    const nextNext = swap(node.next.next);

    const { next } = node;
    node.next = nextNext;
    next.next = node;

    return next;
  }

  return swap(head) || head;
}

module.exports = { swapPairs };
