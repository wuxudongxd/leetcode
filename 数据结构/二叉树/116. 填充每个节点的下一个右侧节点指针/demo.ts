export class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

export function connect(root: Node | null): Node | null {
  if (root == null) {
    return null;
  }
  connectTwoNode(root.left, root.right);
  return root;
}

export function connectTwoNode(node1: Node | null, node2: Node | null): void {
  if (node1 == null || node2 == null) {
    return;
  }
  node1.next = node2;
  connectTwoNode(node1.left, node1.right);
  connectTwoNode(node1.right, node2.left);
  connectTwoNode(node2.left, node2.right);
}
