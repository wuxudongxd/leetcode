/**
 * 二叉树的基本结构
 */
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
 * 通过数组生成对应的二叉树
 * @param arr 包含二叉树数据的数组
 * @returns 二叉树的头节点
 */
export function createTreeNode(arr: (number | null)[]): TreeNode | null {
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
 * 二叉树递归遍历
 */
// 普通写法:前序遍历(中序和后序改变一下root.val的次序即可)
// export function preorderTraversal(root: TreeNode | null): number[] {
//   const res: number[] = [];
//   const preOrder = (root: TreeNode | null):void => {
//     if (root === null) return;
//     res.push(root.val);
//     preOrder(root.left);
//     preOrder(root.right);
//   };
//   preOrder(root);
//   return res;
// }

// ES6写法：前序遍历(中序和后序改变一下root.val的次序即可)
// export function preorderTraversal(root: TreeNode | null): number[] {
//   return root
//     ? [
//         root.val,
//         ...preorderTraversal(root.left),
//         ...preorderTraversal(root.right),
//       ]
//     : [];
// }

/**
 * 二叉树迭代遍历(颜色标记法)
 */
export interface stackNode {
  color: string;
  node: TreeNode;
}

export function preorderTraversal(root: TreeNode | null): number[] {
  const printArr: number[] = [];
  if (!root) return printArr;
  const stack: stackNode[] = [];
  stack.push({
    color: "white",
    node: root,
  });

  while (stack.length > 0) {
    const { color, node } = stack.pop() as stackNode;
    if (color === "gray") {
      printArr.push(node.val);
    } else {
      // 前序遍历
      node.right && stack.push({ color: "white", node: node.right });
      node.left && stack.push({ color: "white", node: node.left });
      stack.push({ color: "gray", node });

      // 中序遍历
      // node.right && stack.push({ color: "white", node: node.right });
      // stack.push({ color: "gray", node });
      // node.left && stack.push({ color: "white", node: node.left });

      // 后序遍历
      // stack.push({ color: "gray", node });
      // node.right && stack.push({ color: "white", node: node.right });
      // node.left && stack.push({ color: "white", node: node.left });
    }
  }

  return printArr;
}

/**
 * 层序遍历
 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let res: number[][] = [];
  let queue: TreeNode[] = [];
  queue.unshift(root);
  while (queue.length !== 0) {
    let n = queue.length;
    let level: number[] = [];
    while (n) {
      let node: TreeNode = queue.pop() as TreeNode;
      level.push(node.val);
      node.left && queue.unshift(node.left);
      node.right && queue.unshift(node.right);
      n--;
    }
    res.push(level);
  }
  return res;
}


/**
 * "自顶向下"的伪代码(先序遍历)
 */
/*
  1. return specific value for null node
  2. update the answer if needed                      // answer <-- params
  3. left_ans = top_down(root.left, left_params)		// left_params <-- root.val, params
  4. right_ans = top_down(root.right, right_params)	// right_params <-- root.val, params
  5. return the answer if needed                      // answer <-- left_ans, right_ans
*/

/**
 * "自底向上"的伪代码(后序遍历)
 */
/* 
  1. return specific value for null node
  2. left_ans = bottom_up(root.left)			// call function recursively for left child
  3. right_ans = bottom_up(root.right)		// call function recursively for right child
  4. return answers                           // answer <-- left_ans, right_ans, root.val
*/
