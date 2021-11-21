function findLHS(nums: number[]): number {
  let max = 0;
  let map = new Map();

  for (const num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    let count = Math.max(map.get(num - 1) || 0, map.get(num + 1) || 0);
    max = Math.max(max, count ? count + map.get(num) : 0);
  }
  return max;
}
