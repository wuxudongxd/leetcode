function singleNumber(nums: number[]): number {
  const map = new Map();
  let res = 0;
  nums.forEach((n) => map.set(n, map.has(n) ? map.get(n) + 1 : 1));
  for (const [n, count] of map.entries()) {
    if (count === 1) {
      res = n;
    }
  }
  return res;
}
