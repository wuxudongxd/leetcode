function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const helper = (start: number, num: number[]) => {
    const total = num.reduce((pre, cur) => pre + cur, 0);
    if (total >= target) {
      if (total === target) {
        res.push(num);
      }
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      helper(i, num.concat(candidates[i]));
    }
  };

  helper(0, []);
  console.log(res);

  return res;
}

combinationSum([2, 3, 6, 7], 7);
