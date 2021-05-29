import { TreeNode, createTreeNode } from "../binaryTree";

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/**
 * 测试部分
 */
const head = createTreeNode([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(head));
