/**
 * 双指针法
 */
export function removeDuplicates(nums: number[]): number {
  if (nums.length == 0) return 0;
  let left = 0;
  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      nums[++left] = nums[right];
    }
  }
  // 下标+1
  return ++left;
}

/**
 * 测试部分
 */
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
