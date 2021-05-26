/**
 Do not return anything, modify nums in-place instead.
 */
// export function rotate(nums: number[], k: number): void {
//     const length = nums.length
//   for (let i = 0; i <= k; i++) {
//     nums.unshift(nums[length-1]);
//     nums.splice(length, 1);
//   }
// }

export function rotate(nums: number[], k: number): void {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  function reverse(nums: number[], start: number, end: number) {
    while (start < end) {
      [nums[start++], nums[end--]] = [nums[end], nums[start]];
    }
  }
}

/**
 * 测试
 */

rotate([1, 2, 3, 4, 5, 6, 7], 3);
