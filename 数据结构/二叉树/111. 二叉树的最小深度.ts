import { TreeNode, createTreeNode } from "./binaryTree";

export function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  if (!root.left && root.right) {
    return minDepth(root.right) + 1;
  }
  if (root.left && !root.right) {
    return minDepth(root.left) + 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

// test
// const root = createTreeNode([2, null, 3, null, 4, null, 5, null, 6]);
const root = createTreeNode([1, 2, 3, 4, 5, 6, 7, 8]);
const level = minDepth(root);
console.log(level);
