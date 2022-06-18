const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};

/**
 * DFS
 */
// const visited = new Set();
// const dfs = (n) => {
//   visited.add(n);
//   graph[n].forEach((c) => {
//     if (!visited.has(c)) {
//       dfs(c);
//     }
//   });
// };

/**
 * BFS
 */
const bfs = (n) => {
  const visited = new Set();
  const queue: number[] = [n];
  visited.add(n);
  while (queue.length) {
    const n = queue.shift();
    graph[n].forEach((c) => {
      if (!visited.has(c)) {
        queue.push(c);
        visited.add(c);
      }
    });
  }
};
