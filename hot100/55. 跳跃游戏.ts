function canJump(nums: number[]): boolean {
  if (nums.length < 0) return true;
  let cur = nums[0];
  let i = 1;
  for (; i < nums.length; i++) {
    if (cur === 0) break;
    cur--;
    cur = cur < nums[i] ? nums[i] : cur;
  }
  return i === nums.length;
}
