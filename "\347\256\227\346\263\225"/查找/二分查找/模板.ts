// 寻找一个数（基本的二分搜索）
export function binarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + ~~((right - left) / 2);
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

// 寻找左侧边界的二分搜索
export function leftBinarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + ~~((right - left) / 2);
    if (nums[mid] === target) {
      // 收缩右侧边界
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return nums[left] !== target ? -1 : left;
}

// 寻找右侧边界的二分搜索
export function rightBinarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + ~~((right - left) / 2);
    if (nums[mid] === target) {
      // 收缩左侧边界
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return nums[right] !== target ? -1 : right;
}
