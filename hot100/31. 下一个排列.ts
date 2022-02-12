/* eslint-disable no-param-reassign */
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let flag = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      let index = i;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[index] > nums[j]) {
          index = j;
        }
      }
      [nums[index], nums[i - 1]] = [nums[i - 1], nums[index]];
      flag = i;
      break;
    }
  }

  if (!flag) {
    nums.sort();
  } else {
    const left = nums.splice(0, flag);
    nums = [...left, ...nums.sort()];
    console.log(nums);
  }
}

nextPermutation([1, 3, 2]);
