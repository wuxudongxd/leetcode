import { TreeNode } from "../binaryTree";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return null;
  if (root.val === val) return root;
  if (root.val < val) {
    return searchBST(root.right, val);
  }
  if (root.val > val) {
    return searchBST(root.left, val);
  }
  return null;
}
