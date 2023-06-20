import { TreeNode } from "../binaryTree";

function kthSmallest(root: TreeNode | null, k: number): number {
  const arr = inOrder(root);
  function inOrder(root: TreeNode | null): number[] {
    if (!root) return [];
    return [...inOrder(root.left), root.val, ...inOrder(root.right)];
  }
  return arr[k - 1];
}

/**
 * 测试代码
 */
let head = new TreeNode(4);
head.left = new TreeNode(2);
head.right = new TreeNode(5);
head.left.right = new TreeNode(3);

console.log(kthSmallest(head, 1));
