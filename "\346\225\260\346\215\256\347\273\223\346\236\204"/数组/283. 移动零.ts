/**
 Do not return anything, modify nums in-place instead.
 */
// export function moveZeroes(nums: number[]): void {
//   let i = 0; 
//   let count = 0
//   for (let j = 1; j < nums.length; ) {
//     if (nums[i] === 0 && nums[j] !== 0) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       count += 1;
//       i++;
//       j++;
//     } else if (nums[i] === 0 && nums[j] === 0) {
//       j++;
//     } else if (nums[i] !== 0) {
//       i++;
//       j++;
//     }
//   }
//   console.log(count);
  
// }

export function moveZeroes(nums: number[]): void {
  let length = nums.length,
    left = 0,
    right = 0;
  let count = 0;
  while (right < length) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      count += 1;
      left++;
    }
    right++;
  }
  console.log(count);
}
/**
 * 测试部分J
 */
moveZeroes([1, 0, 1]);
