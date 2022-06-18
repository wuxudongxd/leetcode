import { TreeNode } from "./binaryTree";

export function buildTree(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
}

export function build(
  inorder: number[],
  inStart: number,
  inEnd: number,
  postorder: number[],
  postStart: number,
  postEnd: number
): TreeNode | null {
  if (inStart > inEnd) {
    return null;
  }
  const rootVal: number = postorder[postEnd];
  let index: number = 0;
  for (let i = inStart; i <= inEnd; i++) {
    if (rootVal === inorder[i]) {
      index = i;
      break;
    }
  }
  let leftSize: number = index - inStart;
  const root: TreeNode = new TreeNode(rootVal);
  root.left = build(
    inorder,
    inStart,
    index - 1,
    postorder,
    postStart,
    postStart + leftSize - 1
  );
  root.right = build(
    inorder,
    index + 1,
    inEnd,
    postorder,
    postStart + leftSize,
    postEnd - 1
  );
  return root;
}
