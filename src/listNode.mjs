function listNode(arr) {
  const head = {};
  let node = head;

  arr.forEach((n, i) => {
    node.val = n;
    node.next = i === arr.length - 1 ? null : {};
    node = node.next;
  });

  return head;
}

module.exports = { listNode };
