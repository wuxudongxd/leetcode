import { TreeNode, createTreeNode } from "./binaryTree";

// export function minDepth(root: TreeNode | null): number {
//   if (!root) {
//     return 0;
//   }
//   if (!root.left && root.right) {
//     return minDepth(root.right) + 1;
//   }
//   if (root.left && !root.right) {
//     return minDepth(root.left) + 1;
//   }
//   return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
// }

/**
 * BFS
 */
export function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const q:[TreeNode, number][] = [[root, 1]];
  while(q.length){
    const [node, level] = q.shift();
    if (!node.left && !node.right){
      return level
    }
    if (node.left) q.push([node.left, level + 1]);
    if (node.right) q.push([node.right, level + 1]);
  }
}