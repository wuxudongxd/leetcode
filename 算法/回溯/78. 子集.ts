function subsets(nums: number[]): number[][] {
  let result:number[][] = [];
  let path:number[] = [];
  function backtracking(startIndex: number) {
    result.push(path.slice());
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  }
  backtracking(0);
  return result;
}

subsets([1, 2, 3])
