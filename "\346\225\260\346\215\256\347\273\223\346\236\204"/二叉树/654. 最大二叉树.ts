import { TreeNode } from "./binaryTree";

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  return build(nums, 0, nums.length - 1);
}

export function build(
  nums: number[],
  low: number,
  high: number
): TreeNode | null {
  if (low > high) {
    return null;
  }
  let index: number = -1,
    maxVal: number = Number.MIN_SAFE_INTEGER;
  for (let i = low; i <= high; i++) {
    if (maxVal < nums[i]) {
      index = i;
      maxVal = nums[i];
    }
  }
  const root: TreeNode = new TreeNode(maxVal);
  root.left = build(nums, low, index - 1);
  root.right = build(nums, index + 1, high);
  return root;
}
