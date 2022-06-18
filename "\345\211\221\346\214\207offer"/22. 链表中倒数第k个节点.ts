import { ListNode } from "../数据结构/链表/linkedList";

export function getKthFromEnd(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (head === null) return null;
  let map = new Map();
  let p = head;
  let i = 1;
  while (p) {
    let node = p;
    map.set(i, node);
    p = p.next;
    i = i + 1;
  }
  return map.get(i - k - 1);
}
