import { ListNode, createNode } from "../../数据结构/链表/linkedList";

export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  if (head === null) return null;
  let pre: ListNode = head;
  let temp: ListNode = head;

  while (head.next !== null) {
    head = head.next;
    if (head.val === val) {
      if (head.next) {
        pre.next = head.next;
        head = head.next;
        pre = head;
      } else {
        pre.next = null;
      }
    } else {
      if (head.next) {
        head = head.next;
        pre = head;
      }
    }
  }
  if ((temp.val = val)) {
    return temp.next;
  } else {
    return temp;
  }
}

/**
 * 测试部分
 */

let head = createNode([1, 2, 6, 3, 4, 5, 6]);
removeElements(head, 6);
