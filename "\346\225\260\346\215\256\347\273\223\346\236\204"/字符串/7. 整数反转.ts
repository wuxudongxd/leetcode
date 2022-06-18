/**
 * 转字符串求解
 */
// function reverse(x: number): number {
//   const lowest = -Math.pow(2, 31);
//   const highest = Math.pow(2, 31) - 1;
//   function reverseString(s: string[]): void {
//     let length = s.length;
//     for (let i = 0; i < s.length / 2; i++) {
//       [s[i], s[length - 1 - i]] = [s[length - 1 - i], s[i]];
//     }
//   }

//   if (x >= 0) {
//     let arr = x.toString().split("");
//     reverseString(arr);
//     x = parseInt(arr.join(""));
//     if (x > highest) return 0
//   } else {
//     let arr = x.toString().split("");
//     arr.splice(0, 1);
//     reverseString(arr);
//     arr.unshift("-");
//     x = parseInt(arr.join(""));
//     if (x < lowest) return 0
//   }
//   return x;
// }

/**
 * 计算求解
 */
function reverse(x: number): number {
  const lowest = -Math.pow(2, 31);
  const highest = Math.pow(2, 31) - 1;
  let ans = 0;
  while (x !== 0) {
    ans = ans * 10 + (x % 10);
    if (x > 0 && ans > highest) return 0;
    if (x < 0 && ans < lowest) return 0;
    x = ~~(x / 10);
  }
  return ans;
}

/**
 * 测试
 */
reverse(123)