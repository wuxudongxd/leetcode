function longestSubsequence(arr: number[], difference: number): number {
  let max = 0;
  const dp = new Map();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    dp.set(arr[i], (dp.get(arr[i] - difference) || 0) + 1);
    max = Math.max(max, dp.get(arr[i]));
  }
  return max;
}
