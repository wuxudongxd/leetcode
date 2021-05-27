import { ListNode, createNode } from "../linkedList";

/**
 * 借助数组
 */
// function isPalindrome(head: ListNode | null): boolean {
//   if (head === null) return false;
//   let arr: number[] = [];
//   for (let i = 0; head !== null; i++) {
//     arr[i] = head.val;
//     head = head.next;
//   }
//   let length: number = arr.length;
//   let flag: boolean = true;
//   for (let i = 0; i < Math.floor(length / 2); i++) {
//     if (arr[i] !== arr[length - 1 - i]) {
//       flag = false;
//     }
//   }
//   return flag;
// }

/**
 * 快慢指针+链表反转
 */
export function isPalindrome(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast !== null && fast.next !== null) {
    slow = (slow as ListNode).next;
    fast = fast.next.next;
  }
  if (fast !== null) {
    slow = (slow as ListNode).next;
  }
  let left: ListNode | null = head;
  let right: ListNode | null = reverse(slow);

  // 由于链表中right比left更加靠近null，所以下面只判断right !== null就可，不过为了避免ts对left可能为null的检验报错，这里加上了left !== null判断
  while (right !== null && left !== null) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
}

export function reverse(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null,
    cur: ListNode | null = head,
    next: ListNode | null = null;
  while (cur !== null) {
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
let arrS = [1, 2, 2, 1];
let head = createNode(arrS);
console.log(isPalindrome(head));
