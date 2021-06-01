import { TreeNode, createTreeNode } from "./binaryTree";

/**
 * 递归解决：“自顶向下”思路
 */
// export function maxDepth(root: TreeNode | null): number {
//   let answer = 0,
//     depth = 0;
//   function maximum_depth(root: TreeNode | null, depth: number): void {
//     if (!root) return;
//     if (root.left == null && root.right == null) {
//       answer = Math.max(answer, depth);
//     }
//     maximum_depth(root.left, depth + 1);
//     maximum_depth(root.right, depth + 1);
//   }
//   maximum_depth(root, depth);
//   return answer;
// }

/**
 * 递归解决：“自底向上”思路
 */
export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/**
 * 测试部分
 */
const head = createTreeNode([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(head));
