import { ListNode, createNode } from "../linkedList";

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   if (head === null || head.next === null) return null;
//   let faster: ListNode = head;
//   let slower: ListNode = head;
//   while (faster.next !== null && n > 0) {
//     n--;
//     faster = faster.next;
//   }
//   while (faster.next !== null && slower.next !== null) {
//     faster = faster.next;
//     slower = slower.next;
//   }
//   slower.next = (slower.next as ListNode).next;
//   return head;
// }

/**
 * 测试部分
 */
let head = createNode([1, 2]);
console.log(removeNthFromEnd(head, 2));

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let slow = head,
    fast = head,
    last = null;
  while (n) {
    fast = fast!.next;
    --n;
  }
  if (!fast) return head!.next;
  while (fast) {
    last = slow;
    slow = slow!.next;
    fast = fast.next;
  }
  last!.next = slow!.next;
  return head;
}