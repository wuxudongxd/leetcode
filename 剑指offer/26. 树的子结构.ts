import { TreeNode } from '../数据结构/二叉树/binaryTree';

export function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (A === null || B === null) {
    return false;
  }

  function check(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null || q === null) {
      return q === null;
    }
    return check(p?.left, q?.left) && check(p?.right, q?.right) && p.val === q.val;
  }

  let res = false;
  const dfs = function (node: TreeNode) {
    if (node === null) return;
    if (check(node, B)) {
      res = true;
      return;
    }
    node.left && dfs(node.left);
    node.right && dfs(node.right);
  };
  dfs(A);

  return res;
}
