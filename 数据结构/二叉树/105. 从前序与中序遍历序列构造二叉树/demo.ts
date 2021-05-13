import { TreeNode } from "../binaryTree"

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    return build(preorder, 0, preorder.length -1, inorder, 0, inorder.length -1)
}

export function build(preorder: number[], preStart: number, preEnd: number, inorder: number[], inStart: number, inEnd: number): TreeNode | null{
    if (preStart > preEnd){
        return null;
    }
    const rootVal: number = preorder[preStart]
    let index: number = 0;
    for (let i = inStart; i <= inEnd; i++){
        if (rootVal === inorder[i]){
            index = i;
            break;
        }
    }
    let leftSize: number = index - inStart
    const root: TreeNode = new TreeNode(rootVal);
    root.left = build(preorder, preStart + 1, preStart + leftSize, inorder, inStart, index - 1)
    root.right = build(preorder, preStart + leftSize + 1, preEnd,inorder, index + 1, inEnd)
    return root;
}
