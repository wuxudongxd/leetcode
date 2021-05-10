import { TreeNode } from "../../../utils/binaryTree"

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    let res: Array<TreeNode | null> = new Array()
    let memo: Map<string, number> = new Map()
    const traverse = (root: TreeNode | null): string => {
        if (root == null) return '#'
        let left = traverse(root.left)
        let right = traverse(root.right)
        let subTree = `${left},${right},${root.val}`
        const count = memo.get(subTree) || 0
        if (count === 1) {
            res.push(root)
        }
        memo.set(subTree, count + 1)
        return subTree
    }
    traverse(root)
    return res
};