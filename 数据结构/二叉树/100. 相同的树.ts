import { TreeNode } from "./binaryTree";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  return (
    isSameTree(p?.left, q?.left) &&
    isSameTree(p?.right, q?.right) &&
    p.val === q.val
  );
}
