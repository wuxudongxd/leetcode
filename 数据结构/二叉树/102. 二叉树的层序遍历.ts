import { TreeNode } from "./binaryTree";

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  let queue: TreeNode[] = [];
  if (root !== null) {
    queue.unshift(root);
    while (queue.length !== 0) {
      let n = queue.length;
      let level: number[] = [];
      for (let i = 0; i < n; i++) {
        let node: TreeNode = queue.pop() as TreeNode;
        level.push(node.val);
        if (node.left !== null) {
          queue.unshift(node.left);
        }
        if (node.right !== null) {
          queue.unshift(node.right);
        }
      }
      res.push(level);
    }
  }
  return res;
}
