/**
 * 第一次尝试
 * 没有考虑格子的遮挡影响，比标准答案的格子数码多
 */
// export function movingCount(m: number, n: number, k: number): number {
//   let sum = 0;
//   const arr: boolean[][] = new Array(m);
//   for (let i = 0; i < m; i++) {
//     arr[i] = new Array(n);
//     for (let j = 0; j < n; j++) {
//       arr[i][j] = false;
//     }
//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       function dfs(i: number, j: number) {
//         if (i < 0 || i >= m || j < 0 || j >= n) return false;
//         if (arr[i][j] === false) {
//           if (~~(i / 10) + ~~(i % 10) + ~~(j / 10) + ~~(j % 10) > k)
//             return false;
//           sum++;
//           arr[i][j] = true;
//           dfs(i + 1, j);
//           dfs(i - 1, j);
//           dfs(i, j + 1);
//           dfs(i, j - 1);
//         }
//       }
//       dfs(i, j);
//     }
//   }
//   return sum;
// }

/**
 * DFS+剪枝
 */
// export const movingCount = (m: number, n: number, k: number): number => {
//   let grid = [...Array(m)].map(() => Array(n).fill(0));
//   const canWalk = (x: number, y: number) => {
//     if (x < 0 || x === m || y < 0 || y === n || grid[x][y]) return false;
//     let s = 0;
//     while (x) {
//       s += x % 10;
//       x = Math.floor(x / 10);
//     }
//     while (y) {
//       s += y % 10;
//       y = Math.floor(y / 10);
//     }
//     return s <= k;
//   };

//   const dfs = (x: number, y: number): number => {
//     if (!canWalk(x, y)) return 0;
//     ++grid[x][y];
//     return 1 + dfs(x + 1, y) + dfs(x, y + 1);
//   };

//   return dfs(0, 0);
// };

/**
 * BFS
 */
export const movingCount = (m: number, n: number, k: number): number => {
  function getSum(num: number) {
    let answer = 0;

    while (num) {
      answer += num % 10;
      num = Math.floor(num / 10);
    }

    return answer;
  }
  // 方向数组
  const directionAry = [
    [0, 1], // 右
    [1, 0], // 下
  ];

  // 已经走过的坐标
  let set = new Set(["0,0"]);

  // 将遍历的坐标队列，题意要求从[0,0]开始走
  let queue = [[0, 0]];

  // 遍历队列中的坐标
  while (queue.length) {
    // 移除队首坐标
    let [x, y] = queue.shift() as number[];

    // 遍历方向
    for (let i = 0; i < 4; i++) {
      let offsetX = x + directionAry[i][0];
      let offsetY = y + directionAry[i][1];

      // 临界值判断
      if (
        offsetX < 0 ||
        offsetX >= m ||
        offsetY < 0 ||
        offsetY >= n ||
        getSum(offsetX) + getSum(offsetY) > k ||
        set.has(`${offsetX},${offsetY}`)
      ) {
        continue;
      }

      // 走过的格子就不再纳入统计
      set.add(`${offsetX},${offsetY}`);

      // 将该坐标加入队列（因为这个坐标的四周没有走过，需要纳入下次的遍历）
      queue.push([offsetX, offsetY]);
    }
  }

  // 走过坐标的个数就是可以到达的格子数
  return set.size;
};

/**
 * 测试部分
 */
console.log(movingCount(16, 8, 4));
