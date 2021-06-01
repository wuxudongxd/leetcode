import { TreeNode } from "./binaryTree";

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || p === root || q === root) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  
  if (left !== null && right !== null) {
    return root;
  }
  return left ? left : right;
}
