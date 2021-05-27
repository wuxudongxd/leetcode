import { ListNode } from "../linkedList";
/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root: ListNode | null): void {
    if (root === null || root.next === null) return;
    root.val = root.next.val;
    root.next = root.next.next
}
