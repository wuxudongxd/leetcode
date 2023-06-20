/* eslint-disable @typescript-eslint/prefer-for-of */
/**
 * 链表节点的基本结构
 */
export class ListNode {
  public val: number;
  public next: ListNode | null;
  public constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 通过数组生成对应的链表
 * @param arr 包含链表指的数组
 * @returns 链表的头节点
 */
export function createNode(arr: number[]): ListNode | null {
  let head: ListNode | null = null;
  let curNode: ListNode | null = null;
  for (let i = 0; i < arr.length; i++) {
    let node: ListNode = new ListNode(arr[i]);
    if (curNode === null) {
      head = node;
      curNode = node;
    } else {
      curNode.next = node;
      curNode = curNode.next;
    }
  }
  return head;
}

/**
 * 输出链表的值
 * @param head 链表的头结点
 */
export function printNode(head: ListNode | null): void {
  if (head === null) {
    console.log('空链表');
  } else {
    let tempNode: ListNode = head;
    console.log(tempNode.val);
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
      console.log(tempNode.val);
    }
  }
}

/**
 * 链表的反转（迭代）
 * @param head 链表的头结点
 * @returns 反转后链表的头结点，输入的head结点在反转后处在链表末尾，next指向null
 */
export function reverse(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null;
  let cur: ListNode | null = head;
  let next: ListNode | null = null;
  while (cur !== null) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

/**
 * 链表的反转（递归）
 * @param head
 */
export function reverseRecursion(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  const last: ListNode | null = reverseRecursion(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}
