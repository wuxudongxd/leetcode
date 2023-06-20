import { ListNode } from "./linkedList";

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

/**
 * 标记法
 */
// interface ListNode extends Record<string, any> {
//   loop: boolean;
// }

// function hasCycle(head: ListNode | null): boolean {
//   while (head !== null) {
//     if (head.loop) {
//       return true;
//     }
//     head.loop = true;
//     head = head.next;
//   }
//   return false;
// }

/**
 * 快慢指针
 */
function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false;
  let fast = head?.next,
    slow = head;
  while (fast !== slow) {
    if (fast === null || fast.next === null) return false;
    slow = slow.next as ListNode;
    fast = fast.next.next;
  }
  return true;
}
