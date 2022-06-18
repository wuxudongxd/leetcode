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
  if (!root) return null;
  let queue: Node[] = [];
  queue.unshift(root);
  while (queue.length !== 0) {
    let n = queue.length;
    let tempStack: Node | null = null;
    while (n) {
      let node: Node = queue.pop() as Node;
      if (tempStack) {
        tempStack.next = node;
      }
      tempStack = node;
      node.left && queue.unshift(node.left);
      node.right && queue.unshift(node.right);
      n--;
    }
    tempStack = null;
  }
  return root;
}
