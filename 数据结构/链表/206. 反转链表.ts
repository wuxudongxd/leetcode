import { ListNode } from "./linkedList";

export function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null,
    cur: ListNode | null = head,
    next: ListNode | null = null;
  while (cur !== null) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
