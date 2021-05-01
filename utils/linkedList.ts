/**
 * 链表节点的基本结构
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
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
    console.log("空链表");
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
 * 链表的反转
 * @param head 链表的头结点
 * @returns 反转后链表的头结点，输入的head结点在反转后处在链表末尾，next指向null
 */
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