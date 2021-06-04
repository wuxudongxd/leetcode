export function search(nums: number[], target: number): number {
  if (nums.length === 0) return -1;
  let low = 0,
    high = nums.length - 1,
    middle = nums.length / 2;
  while (low < high) {
    if (target > nums[middle]) {
      low = middle;
    } else if (target < nums[middle]) {
      high = middle;
    } else {
      return middle;
    }
    middle = Math.floor((low + high) / 2);
  }
  return -1;
}

search([-1, 0, 3, 5, 9, 12], 2);
