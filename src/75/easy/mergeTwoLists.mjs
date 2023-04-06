/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  const result = [];

  while (list1.length || list2.length) {
    const value = list1[0] <= list2[0] ? list1.shift() : list2.shift();
    result.push(value);
  }

  return result;
};

module.exports = { mergeTwoLists };
