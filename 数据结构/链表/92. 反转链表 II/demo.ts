import { ListNode } from "../linkedList";

export let successor: ListNode | null = new ListNode();

export function reverseN(head: ListNode, n: number): ListNode {
  if (n === 1) {
    successor = head.next;
    return head;
  }
  let last: ListNode = reverseN(head.next as ListNode, n - 1);
  (head.next as ListNode).next = head;
  head.next = successor;
  return last;
}

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (left === 1) {
    return reverseN(head as ListNode, right);
  }
  (head as ListNode).next = reverseBetween((head as ListNode).next as ListNode, left - 1, right - 1);
  return head;
}

