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

function levelOrder(root: TreeNode | null): number[] {
  if (root === null) return [];
  const queue = [root];
  const res: number[] = [];
  while (queue.length) {
    let node = queue.shift() as TreeNode;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    res.push(node.val);
  }
  return res;
}
