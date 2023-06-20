function missingNumber(nums: number[]): number {
  const n = nums.length;
  return (n * (n + 1)) / 2 - nums.reduce((acc, cur) => acc + cur);
}
