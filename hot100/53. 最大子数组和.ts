function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] < 0 ? nums[i] : dp[i - 1] + nums[i];
  }
  console.log(dp[nums.length - 1]);

  console.log(dp);

  return Math.max(...dp);
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
