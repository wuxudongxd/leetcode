export class Node {
  public val: number;
  public children: Node[];
  public constructor(val?: number, children?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

// function maxDepth(root: Node | null): number {
//   if (root === null) return 0;
//   let res = 0;
//   const arr: Node[] = [root];
//   let length = 0;
//   while (arr.length) {
//     res++;
//     length = arr.length;
//     for (let i = 0; i < length; i++) {
//       let node = arr.shift() as Node;
//       if (node.children.length) {
//         node.children.forEach((child: Node) => {
//           arr.push(child);
//         });
//       }
//     }
//   }
//   return res;
// }

function maxDepth(root: Node | null): number {
  if (!root) return 0;
  let max = 0;
  const dfs = (node: Node, deep: number): void => {
    if (!node.children.length) {
      max = Math.max(max, deep);
      return;
    }
    for (const child of node.children) {
      dfs(child, deep + 1);
    }
  };
  dfs(root, 1);

  return max;
}
