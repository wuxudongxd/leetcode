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
/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if (root === null) return;
    flatten(root.left)
    flatten(root.right)

    let left: TreeNode | null = root.left;
    let right: TreeNode | null = root.right;

    root.left = null;
    root.right = left;

    let p: TreeNode | null = root;
    while(p.right !== null){
        p = p.right;
    }
    p.right = right
}

