/**
 * dp
 */
export function cuttingRope(n: number): number {
  // dp[i] 表示绳长 i 剪短后的最大乘积。
  const dp = [0, 1, 1, 2];
  // 绳长小于 4 ，直接返回值。
  if (n < 4) return dp[n];
  // 从绳长为 4 开始
  for (let i = 4; i <= n; i++) {
    // 从 1 处开始再剪一刀
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(dp[i] ?? 0, Math.max(j * (i - j), j * dp[i - j]));
    }
  }
  return dp[n];
}

/**
 * 贪心
 */
// export function cuttingRope(n: number): number {
//   if (n < 4) {
//     return n - 1;
//   }
//   let res = 1;
//   while (n > 4) {
//     res *= 3;
//     n -= 3;
//   }
//   return res * n;
// }

// test
cuttingRope(10);
