import { ListNode } from '../数据结构/链表/linkedList';

export function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (head === null) return null;
  let pre: ListNode | null = null;
  let node: ListNode | null = head;
  let res: ListNode | null = head;
  while (node !== null) {
    if (node.val === val) {
      if (pre !== null) {
        pre.next = node.next;
      } else {
        res = node.next;
      }
      break;
    }
    pre = node;
    node = node.next;
  }
  return res;
}
