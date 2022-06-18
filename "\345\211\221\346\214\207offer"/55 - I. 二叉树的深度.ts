import { createTreeNode, TreeNode } from '../数据结构/二叉树/binaryTree';

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

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  let level = 0;
  const queue = [root];
  while (queue.length) {
    level++;
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      node?.left && queue.push(node.left);
      node?.right && queue.push(node.right);
    }
  }
  return level;
}

// test
const root = createTreeNode([1, 2, 3, 4, null, null, 5]);
maxDepth(root);
