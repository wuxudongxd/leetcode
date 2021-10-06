import { ListNode } from '../数据结构/链表/linkedList';

export function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null;
  let cur: ListNode | null = head;
  let next: ListNode | null = null;
  while (cur !== null) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
