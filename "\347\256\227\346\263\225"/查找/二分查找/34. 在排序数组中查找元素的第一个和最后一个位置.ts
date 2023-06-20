function searchRange(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = left + ~~((right - left) / 2);
    if (nums[mid] === target) {
      left = mid;
      right = mid;
      break;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  if (left > right) {
    return [-1, -1];
  } else {
    while (nums[left - 1] === target) left--;
    while (nums[right + 1] === target) right++;
    return [left, right];
  }
}
