import { TreeNode } from "../../binaryTree"

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) return null;
    if (root.val == key) {
        if (root.left === null) return root.right
        if (root.right === null) return root.left
        let minNode: TreeNode = getMin(root.right)
        root.val = minNode.val
        root.right = deleteNode(root.right, minNode.val)
    } else if (root.left !== null && root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if (root.right !== null && root.val < key) {
        root.right = deleteNode(root.right, key)
    }
    return root;

    function getMin(node: TreeNode): TreeNode {
        // BST 最左边的就是最小的
        while (node.left !== null) node = node.left
        return node;
    }
};