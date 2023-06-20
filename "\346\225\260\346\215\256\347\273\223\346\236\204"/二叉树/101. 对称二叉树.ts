import { TreeNode } from "./binaryTree";

export function isSymmetric(root: TreeNode | null): boolean {
  const check = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (left == null && right == null) {
      // 两个子树都为null，是对称的
      return true;
    }
    if (left && right) {
      // 两个子树都存在，则需要：root值相同，且他们的子树也满足镜像
      return (
        left.val == right.val &&
        check(left.left, right.right) &&
        check(left.right, right.left)
      );
    }
    return false; // 一个子树存在一个不存在，肯定不对称
  };

  if (root == null) {
    // 如果传入的root就是null，对称
    return true;
  }
  return check(root.left, root.right); // 否则，判断它的左右子树是否满足对称
}

// export function isSymmetric(root: TreeNode | null): boolean {
//   if (root == null) return true;

//   const queue = [];
//   queue.push(root.left, root.right); // 起初入列两个子树

//   while (queue.length) {
//     // 队列清空就结束，没有节点可入列了
//     const levelSize = queue.length; // 当前层的节点个数
//     for (let i = 0; i < levelSize; i += 2) {
//       // 当前层的节点成对出列
//       const left = queue.shift();
//       const right = queue.shift(); // 出列一对节点
//       if ((left && right == null) || (left == null && right)) {
//         // 一个存在 一个不存在
//         return false;
//       }
//       if (left && right) {
//         // 两个都存在
//         if (left.val != right.val) {
//           // 节点值不同，不对称
//           return false;
//         }
//         queue.push(left.left, right.right); // 推入下一层的一对节点
//         queue.push(left.right, right.left); // 推入下一层的一对节点
//       }
//     }
//   }
//   return true; // bfs结束，始终没有返回false，则返回真
// };
