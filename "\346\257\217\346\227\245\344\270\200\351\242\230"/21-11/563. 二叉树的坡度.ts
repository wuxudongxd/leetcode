import { TreeNode } from '../../数据结构/二叉树/binaryTree';

function findTilt(root: TreeNode | null): number {
  let res = 0;
  const recursion = (root: TreeNode | null): number => {
    if (root === null) return 0;
    const leftVal = recursion(root.left);
    const rightVal = recursion(root.right);
    res += Math.abs(leftVal - rightVal);
    return root.val + leftVal + rightVal;
  };
  recursion(root);
  return res;
}
