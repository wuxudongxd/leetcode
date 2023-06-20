/**
 * 双指针法
 */
export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      nums[left + 1] = nums[right];
      left++;
    }
    right++;
  }
  // 下标+1
  return left + 1;
}

/**
 * 测试部分
 */
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
