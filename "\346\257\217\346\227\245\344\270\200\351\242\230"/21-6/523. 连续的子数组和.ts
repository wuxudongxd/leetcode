function checkSubarraySum(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (sum(i, j) % k === 0) return true;
    }
  }
  function sum(m: number, n: number) {
      let ans = nums[n]
    while (m < n) {
      ans += nums[m++];
    }
    return ans;
  }
  return false;
}

checkSubarraySum([23, 2, 4, 6, 6], 7);
