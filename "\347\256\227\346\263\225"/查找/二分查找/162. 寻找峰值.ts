export function findPeakElement(nums: number[]): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

// 测试
findPeakElement([1, 2, 1, 3, 5, 6, 4]);
