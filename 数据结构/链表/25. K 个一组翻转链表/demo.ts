import { ListNode, createNode, printNode } from "../../../utils/linkedList";
/**
 * 分组遍历节点
 */
// export function reverseKGroup(
//   head: ListNode | null,
//   k: number
// ): ListNode | null {
//   if (head === null || head.next === null) {
//     return head;
//   }
//   const dummy: ListNode = new ListNode();
//   dummy.next = head;
//   let pre: ListNode = dummy;
//   let end: ListNode | null = dummy;

//   while ((end as ListNode).next !== null) {
//     for (let i = 0; i < k && end !== null; i++) {
//       end = end.next;
//     }
//     if (end === null) {
//       break;
//     }
//     let next: ListNode | null = end.next;
//     end.next = null;
//     let start: ListNode = pre.next as ListNode;
//     pre.next = reverse(start);
//     start.next = next;
//     pre = start;
//     end = start;
//   }
//   return dummy.next;
// }

// export function reverse(head: ListNode) {
//   if (head === null || head.next === null) {
//     return head;
//   }
//   let preNode: ListNode | null = null;
//   let curNode: ListNode | null = head;
//   let nextNode: ListNode | null = null;

//   while (curNode !== null) {
//     nextNode = curNode.next; //nextNode 指向下一个节点,保存当前节点后面的链表。
//     curNode.next = preNode; //将当前节点next域指向前一个节点   null<-1<-2<-3<-4
//     preNode = curNode; //preNode 指针向后移动。preNode指向当前节点。
//     curNode = nextNode; //curNode指针向后移动。下一个节点变成当前节点
//   }
//   return preNode;
// }

/**
 * 递归实现
 */
export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (head === null) {
    return head;
  }
  let a: ListNode | null = head,
    b: ListNode | null = head;
  for (let i = 0; i < k; i++) {
    if (b == null) {
      return head;
    }
    b = b.next;
  }
  let newHead: ListNode = reverse(a, b);
  a.next = reverseKGroup(b, k);
  return newHead;
}

export function reverse(a: ListNode, b: ListNode | null): ListNode {
  let pre: ListNode = new ListNode();
  let cur: ListNode | null = a;
  let next: ListNode | null = new ListNode();
  while (cur !== null && cur !== b) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

/**
 * 测试部分
 */
let arr: number[] = [1, 2, 3, 4, 5],
  k: number = 2;

let head: ListNode | null = createNode(arr);
head = reverseKGroup(head, k);
printNode(head);
