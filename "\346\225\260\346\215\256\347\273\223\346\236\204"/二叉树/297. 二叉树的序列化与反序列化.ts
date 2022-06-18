import { TreeNode } from "./binaryTree";

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
  if (root === null) return "[]";
  let arr: (number | null)[] = [];
  let queue: (TreeNode | null)[] = [];
  queue.unshift(root);
  while (queue.length !== 0) {
    let node = queue.pop();
    if (node) {
      arr.push(node.val);
      if (node.left) {
        queue.unshift(node.left);
      } else {
        queue.unshift(null);
      }

      if (node.right) {
        queue.unshift(node.right);
      } else {
        queue.unshift(null);
      }
    } else {
      arr.push(null);
    }
  }
  return JSON.stringify(arr);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  let arr: (number | null)[] = JSON.parse(data);
  if (arr.length === 0 || arr[0] === null) return null;
  let head: TreeNode = new TreeNode(arr.shift() as number);
  let queue: (TreeNode | null)[] = [head];
  while (queue.length) {
    let node = queue.pop() as TreeNode;
    let left: number | null = arr.shift() as number | null;
    if (left !== null) {
      let leftNode: TreeNode = new TreeNode(left);
      queue.unshift(leftNode);
      node.left = leftNode;
    } else {
      node.left = null;
    }
    if (arr.length) {
      let right: number | null = arr.shift() as number | null;
      if (right !== null) {
        let rightNode: TreeNode = new TreeNode(right);
        queue.unshift(rightNode);
        node.right = rightNode;
      } else {
        node.right = null;
      }
    }
  }
  return head;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
