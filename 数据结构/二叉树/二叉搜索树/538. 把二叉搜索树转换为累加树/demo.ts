import { TreeNode } from "../../binaryTree"

let sum = 0;
function convertBST(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null;
    }
    convertBST(root.right)
    sum += root.val;
    root.val = sum;
    convertBST(root.left)
    return root
};

/**
 * 测试部分
 */
const head = new TreeNode(0)
head.right = new TreeNode(1)
console.log(convertBST(head));
