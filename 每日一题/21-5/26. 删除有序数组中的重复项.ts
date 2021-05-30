export function removeDuplicates(nums: number[]): number {
  // first
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (nums[i] === nums[j]) {
  //       for (let k = i; k < nums.length; k++) {
  //         nums[k] = nums[k + 1];
  //       }
  //       nums.splice(nums.length - 1, 1);
  //       i--;
  //     }
  //   }
  // }

  // second
  for (let i: number = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      for (let j: number = i + 1; j < nums.length; j++) {
        nums[j] = nums[j + 1];
      }
      nums.splice(nums.length - 1, 1);
      i--;
    }
  }

  console.log(nums);
  console.log(nums.length);

  return nums.length;
}

let nums: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums);
