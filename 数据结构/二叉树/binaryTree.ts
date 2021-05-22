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
  let head: TreeNode | null = null;
  let node: TreeNode | null = null;
  let queue: (TreeNode | null)[] = []

  if (arr[0] === null) return null
  head = new TreeNode(arr[0])
  queue.unshift(head)

  let i = 1;
  while (true){
    let curNode = queue.pop() as TreeNode

    if (i >= arr.length) break;
    if (curNode.left === null) {
      node = arrItemToNode(arr[i])
      curNode.left = node
      queue.unshift(node)
      i++
    }

    if (i >= arr.length) break;
    if (curNode.right === null) {
      node = arrItemToNode(arr[i])
      curNode.right = node
      queue.unshift(node)
      i++
    }
  }

  function arrItemToNode(arrItem: number | null): TreeNode | null {
    if (arrItem === null) {
      node = null;
    } else {
      node = new TreeNode(arrItem);
    }
    return node
  }

  return head;
}


/**
 * 测试部分
 */
let arr: (number | null)[] = [40, 20, 60, 10, 30, 50, 70, null, null, 25]
// console.log(createTreeNode(arr));

