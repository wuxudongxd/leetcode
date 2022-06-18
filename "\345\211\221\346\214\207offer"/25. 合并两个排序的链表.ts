import { ListNode, createNode } from '../数据结构/链表/linkedList';

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head = new ListNode();
  let node = head;
  let p1 = l1;
  let p2 = l2;
  while (p1 && p2) {
    if (p1.val >= p2.val) {
      node.next = p2;
      p2 = p2.next;
    } else {
      node.next = p1;
      p1 = p1.next;
    }
    node = node.next;
  }
  if (p1) node.next = p1;
  if (p2) node.next = p2;
  return head.next;
}

// test
let l1 = createNode([1, 2, 4]);
let l2 = createNode([1, 3, 4]);
mergeTwoLists(l1, l2);
