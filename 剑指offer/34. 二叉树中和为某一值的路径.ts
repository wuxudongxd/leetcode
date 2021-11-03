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

function pathSum(root: TreeNode | null, target: number): number[][] {
  if (root === null) return [];
  const res: number[][] = [];
  const path: TreeNode[] = [];
  let sum = 0;
  const dfs = (node: TreeNode) => {
    path.push(node);
    sum += node.val;
    if (node.left === null && node.right === null && sum === target) {
      res.push(path.map((item) => item.val));
    }
    node.left && dfs(node.left);
    node.right && dfs(node.right);
    path.pop();
    sum -= node.val;
  };

  dfs(root);
  return res;
}
