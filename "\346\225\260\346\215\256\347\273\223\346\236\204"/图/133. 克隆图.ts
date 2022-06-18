class Node2 {
  val: number;
  neighbors: Node2[];
  constructor(val?: number, neighbors?: Node2[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: Node2 | null): Node2 | null {
        if(!node) return;
    const visited = new Map();
    const dfs = (n) => {
        const nCopy = new Node2(n.val);
        visited.set(n, nCopy);
        (n.neighbors || []).forEach(ne => {
            if(!visited.has(ne)) {
                dfs(ne);
            }
            nCopy.neighbors.push(visited.get(ne));
        })
    }
    dfs(node);
    return visited.get(node);
}
