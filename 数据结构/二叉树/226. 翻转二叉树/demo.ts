export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  let tmp: TreeNode | null = root.left;
  root.left = root.right;
  root.right = tmp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
