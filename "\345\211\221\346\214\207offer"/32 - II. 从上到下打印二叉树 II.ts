import { TreeNode } from '../数据结构/二叉树/binaryTree';
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const res: number[][] = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const n = queue.length;
    let level: number[] = [];
    for (let i = 0; i < n; i++) {
      let node = queue.shift() as TreeNode;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      level.push(node.val);
    }
    res.push(level);
  }
  return res;
}
