import { ListNode, createNode } from "../../数据结构/链表/linkedList";

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let stackA: ListNode[] = [];
  let stackB: ListNode[] = [];
  while (headA !== null) {
    stackA.push(headA);
    headA = headA.next;
  }
  while (headB !== null) {
    stackB.push(headB);
    headB = headB.next;
  }
  let resListNode: ListNode | null = null;
  while (stackA.length !== 0 && stackB.length !== 0) {
    let ListNodeA: ListNode = stackA.pop() as ListNode;
    let ListNodeB: ListNode = stackB.pop() as ListNode;
    console.log(ListNodeA.next === ListNodeB.next);
    
    if (ListNodeA === ListNodeB) {
      resListNode = ListNodeA;
    } else {
      //   return resListNode;
      break;
    }
  }
  return resListNode;
}

/**
 * 测试部分
 */
let headA = createNode([4, 1, 8, 4, 5]);
let headB = createNode([5, 0, 1, 8, 4, 5]);
getIntersectionNode(headA, headB);
