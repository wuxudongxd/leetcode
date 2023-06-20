// export function singleNumber(nums: number[]): number[] {
//   let set: Set<number> = new Set();
//   let res: number[] = [];
//   for (let item of nums) {
//     if (set.has(item)) {
//       set.delete(item);
//     } else {
//       set.add(item);
//     }
//   }
//   for (let item of set.values()) {
//     res.push(item);
//   }
//   return res;
// }

/**
 * 异或
 */
export function singleNumber(nums: number[]): number[] {
  let xorSum = 0;
  for (let item of nums) {
    xorSum ^= item;
  }
  let value1 = 0;
  let value2 = 0;
  const lsb = xorSum & -xorSum;
  for (let item of nums) {
    if (item & lsb) {
      value1 ^= item;
    } else {
      value2 ^= item;
    }
  }
  return [value1, value2];
}
