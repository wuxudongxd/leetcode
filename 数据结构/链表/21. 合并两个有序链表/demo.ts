import { ListNode, createNode } from "../linkedList";

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let node: ListNode | null = new ListNode();
  let head: ListNode | null = node;
  let l1Node: ListNode | null = l1;
  let l2Node: ListNode | null = l2;
  while (l1Node !== null && l2Node !== null) {
    if (l1Node.val <= l2Node.val) {
      node.next = l1Node;
      l1Node = l1Node.next;
    } else {
      node.next = l2Node;
      l2Node = l2Node.next;
    }
    node = node?.next;
  }
  node.next = l1Node === null ? l2Node : l1Node;

  return head.next;
}

/**
 * 递归解法
 */
// export function mergeTwoLists(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   if (l1 === null) {
//     return l2;
//   } else if (l2 === null) {
//     return l1;
//   } else if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// }

/**
 * 测试部分
 */
let l1 = createNode([]);
let l2 = createNode([0]);
console.log(mergeTwoLists(l1, l2));
