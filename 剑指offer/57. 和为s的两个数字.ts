/* 
function twoSum(nums: number[], target: number): number[] {
  const mid = target >> 1;
  const left = nums.filter((num) => num <= mid);
  const right = nums.filter((num) => num > mid);
  let res: number[] = [];
  for (let num of left) {
    if (right.includes(target - num)) {
      res = [num, target - num];
      break;
    }
  }
  return res;
}
 */

/**
 *  双指针
 */
function twoSum(nums: number[], target: number): number[] {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    } else {
      return [nums[i], nums[j]];
    }
  }
  return [];
}

// test
twoSum([2, 7, 11, 15], 9);
