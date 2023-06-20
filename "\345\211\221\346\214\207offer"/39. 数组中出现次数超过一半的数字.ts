/**
 * 借助map
 */
// function majorityElement(nums: number[]): number {
//   const map = new Map();
//   for (const num of nums) {
//     map.set(num, map.has(num) ? map.get(num) + 1 : 1);
//   }
//   let max = 0;
//   let res = 0;
//   for (const [num, count] of map.entries()) {
//     if (count > max) {
//       max = count;
//       res = num;
//     }
//   }
//   return res;
// }

/**
 * 摩尔投票法
 */
function majorityElement(nums: number[]): number {
  let votes = 0;
  let res = 0;
  for (const num of nums) {
    if (!votes) {
      res = num;
    }
    votes += res === num ? 1 : -1;
  }
  return res;
}
