import { TreeNode } from "./binaryTree";
/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (root === null) return;
  flatten(root.left);
  flatten(root.right);

  let left: TreeNode | null = root.left;
  let right: TreeNode | null = root.right;

  root.left = null;
  root.right = left;

  let p: TreeNode | null = root;
  while (p.right !== null) {
    p = p.right;
  }
  p.right = right;
}
