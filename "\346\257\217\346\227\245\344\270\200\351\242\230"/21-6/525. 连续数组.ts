function findMaxLength(nums: number[]): number {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let nums0 = 0,
      nums1 = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 0) {
        nums0++;
      } else if (nums[j] === 1) {
        nums1++;
      }
      if (nums0 === nums1) {
        res.push(nums0);
      }
    }
  }
  if (res.length !== 0) {
    return res.sort((a, b) => b - a)[0] * 2;
  }
  return 0;
}
