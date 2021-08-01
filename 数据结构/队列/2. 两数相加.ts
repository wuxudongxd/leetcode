class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const root = new ListNode();
  let node = root;
  let carry = 0;
  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const val = val1 + val2 + carry;
    carry = Math.floor(val / 10);
    node.next = new ListNode(val % 10);
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
    node = node.next;
  }
  if (carry){
      node.next = new ListNode(carry);
  }
  return root.next;
}
