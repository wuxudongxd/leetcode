export function containsDuplicate(nums: number[]): boolean {
  let numsSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    numsSet.add(nums[i]);
    if (numsSet.size !== i + 1) {
      return true;
    }
  }
  return false;
}
