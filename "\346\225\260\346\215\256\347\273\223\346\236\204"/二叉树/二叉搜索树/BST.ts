import { TreeNode } from "../binaryTree";

/**
 * 判断 BST 的合法性
 */
export function isValidBST(root: TreeNode): boolean {
  return isValidBst(root, null, null);

  function isValidBst(
    root: TreeNode | null,
    min: TreeNode | null,
    max: TreeNode | null
  ): boolean {
    if (root === null) return true;
    if (min !== null && root.val < min.val) return false;
    if (max !== null && root.val > max.val) return false;
    return (
      isValidBst(root.left, min, root) && isValidBst(root.right, root, max)
    );
  }
}

/**
 * 在 BST 中搜索一个数
 */
export function isInBST(root: TreeNode | null, target: number): boolean {
  if (root === null) return false;
  if (root.val === target) return true;
  if (root.val < target) {
    return isInBST(root.right, target);
  }
  if (root.val > target) {
    return isInBST(root.left, target);
  }
  return false;
}

/**
 * 在 BST 中插入一个数
 */
export function insertIntoBST(root: TreeNode | null, val: number): TreeNode {
  if (root === null) {
    return new TreeNode(val);
  } else if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
}

/**
 * 在 BST 中删除一个数
 */
export function deleteNode(root: TreeNode, key: number): TreeNode | null {
  if (root === null) return null;
  if (root.val == key) {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    let minNode: TreeNode = getMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  } else if (root.left !== null && root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.right !== null && root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  return root;

  function getMin(node: TreeNode): TreeNode {
    // BST 最左边的就是最小的
    while (node.left !== null) node = node.left;
    return node;
  }
}
