function removeDuplicates(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] === nums[j]) {
        for (let k = i; k < nums.length; k++) {
          nums[k] = nums[k + 1];
        }
        nums.splice(nums.length - 1, 1);
        i--;
      }
    }
  }
  console.log(nums);
  console.log(nums.length);

  return nums.length;
}

let nums: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums);
