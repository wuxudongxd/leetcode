// export function singleNumber(nums: number[]): number {
//   const length = nums.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (nums[i] > nums[j]) {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//       }
//     }
//   }
//   if (nums[0] !== nums[1]) return nums[0];
//   if (nums[length - 1] !== nums[length - 2]) return nums[length - 1];
//   for (let i = 1; i < nums.length - 1; i++) {
//     if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i];
//   }
// }

export function singleNumber(nums: number[]): number {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i]
  }
  return ans
}
