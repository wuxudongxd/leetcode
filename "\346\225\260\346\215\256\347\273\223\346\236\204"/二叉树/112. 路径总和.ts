import { TreeNode } from "./binaryTree";

//DFS
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

//BFS
// export type QueueNode = [string, TreeNode | null, number]

// export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//   // 利用双色标记法来实现层次遍历
//   let queue:QueueNode[] = [["white", root, 0]];
//   while (queue.length) {
//     let [color, node, sum] = queue.shift() as QueueNode;
//     if (node === null) continue;
//     // 当节点颜色是白时 表示未遍历的节点
//     if (color === "white") {
//       // 把当前节点的值累加
//       let target = sum + node.val;
//       queue.push(["gray", node, target]);
//       queue.push(["white", node.left, target]);
//       queue.push(["white", node.right, target]);
//       // 当改节点是叶子节点并且当前累加的值等于目标时返回true
//       if (node.right === null && node.left === null && target === targetSum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
