/* eslint-disable no-var */
import { ListNode } from '数据结构/链表/linkedList';
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 借助set
 */
/* 
var getIntersectionNode = function (headA, headB) {
  const set = new Set();
  let p = headA;
  while (p !== null) {
    set.add(p);
    p = p.next;
  }
  p = headB;
  while (p !== null) {
    if (set.has(p)) {
      return p;
    }
    p = p.next;
  }
  return null;
};
 */

/**
 * 双指针
 */
var getIntersectionNode = function (headA, headB) {
  let node1 = headA;
  let node2 = headB;
  while (node1 !== node2) {
    // 这里避免了链表不相交的情况
    // 不相交时会在同时走完两条链表时出现node1和node2都为null的情况
    node1 = node1 ? node1.next : headB;
    node2 = node2 ? node2.next : headA;
  }
  return node1;
};
