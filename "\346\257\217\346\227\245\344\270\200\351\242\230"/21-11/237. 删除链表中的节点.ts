import { ListNode } from '数据结构/链表/linkedList';

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify it in-place instead.
 */
export function deleteNode(root: ListNode | null): void {
  if (root === null || root.next === null) return;
  root.val = root.next.val;
  root.next = root.next.next;
}
