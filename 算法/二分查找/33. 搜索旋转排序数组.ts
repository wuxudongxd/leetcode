export function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  if (nums.length > 1){
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
          left = target >= nums[0] ? 0 : i + 1;
          right = target >= nums[0] ? i : nums.length - 1;
          break;
        }
      }
  }

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  
  return -1;
}

// 测试
search([3,1], 3);
