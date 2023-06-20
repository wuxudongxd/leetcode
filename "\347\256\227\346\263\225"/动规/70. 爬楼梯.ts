function climbStairs(n: number): number {
  if (n < 2) return 1;
  let dp0 = 1;
  let dp1 = 1;
  let temp = 0;
  for (let i = 2; i <= n; i++) {
    temp = dp0;
    dp0 = dp1;
    dp1 = temp + dp1;
  }
  return dp1;
}
