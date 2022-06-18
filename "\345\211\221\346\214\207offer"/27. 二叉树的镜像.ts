import { TreeNode } from "../数据结构/二叉树/binaryTree";

export function mirrorTree(root: TreeNode | null): TreeNode | null {
  const dfs = (root: TreeNode) => {
    if (root === null) return null;
    [root.left, root.right] = [root.right, root.left];
    root.left && dfs(root.left);
    root.right && dfs(root.right);
  };
  dfs(root);
  return root;
}
