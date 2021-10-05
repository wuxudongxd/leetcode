import { TreeNode } from "../数据结构/二叉树/binaryTree";

export function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return false;
  const check = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
    if (node1 === null && node2 === null) return true;
    return node1?.val === node2?.val && check(node1?.left, node2?.right) && check(node1?.right, node2?.left)
  };
  return check(root.left, root.right);
}
