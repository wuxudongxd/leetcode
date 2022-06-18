import { TreeNode } from "./binaryTree";

// export function invertTree(root: TreeNode | null): TreeNode | null {
//   if (root === null) {
//     return null;
//   }
//   let tmp: TreeNode | null = root.left;
//   root.left = root.right;
//   root.right = tmp;
//   invertTree(root.left);
//   invertTree(root.right);
//   return root;
// }

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  return new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
}
