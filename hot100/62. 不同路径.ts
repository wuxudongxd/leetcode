// 超时
// function uniquePaths(m: number, n: number): number {
//   let count = 0;
//   const helper = (row: number, col: number) => {
//     if (row > m || col > n) return;
//     if (row === m && col === n) {
//       count++;
//     }

//     helper(row + 1, col);
//     helper(row, col + 1);
//   };

//   helper(1, 1);
//   console.log(count);

//   return count;
// }

function uniquePaths(m: number, n: number): number {
  const dp = new Array(m).fill(1).map(() => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

uniquePaths(3, 7);
