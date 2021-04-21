function findRepeatNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    while (i !== nums[i]) {
      if (nums[i] === nums[nums[i]]) {
        console.log(nums[i]);
        return nums[i];
      }
      let temp = nums[i];
      //   nums[i] = nums[temp];
      //   nums[temp] = temp;
      [nums[i], nums[temp]] = [nums[temp], nums[i]];
    }
  }
  console.log("没有重复数字");
  return -1;
}

findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);
