import { TreeNode } from "./binaryTree";

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const res: number[][] = [];
  const queue: TreeNode[] = [root];
  while (queue.length !== 0) {
    let n = queue.length;
    const level: number[] = [];
    for (let i = 0; i < n; i++) {
      let node: TreeNode = queue.pop();
      level.push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
    res.push(level);
  }
  return res;
}
