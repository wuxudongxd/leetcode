function minPathSum(grid: number[][]): number {
  if (grid.length === 0) return 0;
  const dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0));
  const row = grid.length;
  const col = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const rowTemp = dp[i - 1]?.[j] || 0;
      const colTemp = dp[i]?.[j - 1] || 0;
      if (!rowTemp) {
        dp[i][j] = colTemp + grid[i][j];
      } else if (!colTemp) {
        dp[i][j] = rowTemp + grid[i][j];
      } else {
        dp[i][j] = Math.min(rowTemp, colTemp) + grid[i][j];
      }
    }
  }
  // console.log(dp);

  return dp[row - 1][col - 1];
}

minPathSum([
  [1, 2, 3],
  [4, 5, 6],
]);
