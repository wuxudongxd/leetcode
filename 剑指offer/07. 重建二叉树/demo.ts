class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // root是前序遍历中根节点的索引，即每个子树的第一个值；left是中序遍历中子树的最左边节点的坐标，right是中序遍历中子树的最右边节点的坐标
  var process = (root: number, left: number, right: number) => {
    if (left > right) return null;
    let node: TreeNode = new TreeNode(preorder[root]); // 获取root索引对应的值，生成node对象
    let i = inorder.indexOf(preorder[root]); // 获取根结点在中序排序中的索引值i，通过i分开左右子树
    node.left = process(root + 1, left, i - 1); // 迭代左子树
    node.right = process(root + (i - left) + 1, i + 1, right); // 迭代右子树  （i - left） 左子树长度
    return node;
  };
  return process(0, 0, inorder.length - 1);
}

/**
 * 测试部分
 */
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

buildTree(preorder, inorder);
