// function integerReplacement(n: number): number {
//   const dp: number[] = [];
//   dp[1] = 0;
//   dp[2] = 1;

//   for (let i = 3; i <= n; i++) {
//     if (i % 2 === 0) {
//       dp[i] = dp[i / 2] + 1;
//     } else {
//       dp[i] = Math.min(dp[i - 1], 1 + dp[(i + 1) / 2]) + 1;
//     }
//   }
//   return dp[n];
// }

function integerReplacement(n: number): number {
  const dfs = (n: number, c: number): number => {
    if (n === 1) return c;
    if (n & 1) {
      return Math.min(dfs(n >> 1, c + 2), dfs((n >> 1) + 1, c + 2));
    } else {
      return dfs(n >> 1, c + 1);
    }
  };
  return dfs(n, 0);
}
