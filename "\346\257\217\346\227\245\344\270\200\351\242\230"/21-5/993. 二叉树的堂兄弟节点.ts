import { TreeNode, createTreeNode } from "../../数据结构/二叉树/binaryTree"

export function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    let x_parent = null, x_depth = null, x_found = false;
    let y_parent = null, y_depth = null, y_found = false;

    function update(node: TreeNode | null, parent: TreeNode | null, depth: number) {
        if (node !== null) {
            if (node.val === x) {
                [x_parent, x_depth, x_found] = [parent, depth, true];
            } else if (node.val === y) {
                [y_parent, y_depth, y_found] = [parent, depth, true];
            }
        }
    }

    if (root === null) return false;
    let q: [TreeNode, number][] = [[root, 0]]
    update(root, null, 0);
    while (q.length) {
        const [node, depth] = q.shift() as [TreeNode, number]
        if (node.left) {
            q.push([node.left, depth + 1])
            update(node.left, node, depth + 1)
        }
        if (node.right) {
            q.push([node.right, depth + 1])
            update(node.right, node, depth + 1)
        }
        if (x_found && y_found) {
            break;
        }
    }
    return x_depth === y_depth && x_parent !== y_parent;
};

/**
 * 测试部分
 */
let arr = [1, 2, 3, null, 4, null, 5]
let tree = createTreeNode(arr);
console.log(isCousins(tree, 5, 4));


