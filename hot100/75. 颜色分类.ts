/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    let minIdex = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minIdex]) {
        minIdex = j;
      }
    }
    if (minIdex !== i) {
      [nums[minIdex], nums[i]] = [nums[i], nums[minIdex]];
    }
  }
}
