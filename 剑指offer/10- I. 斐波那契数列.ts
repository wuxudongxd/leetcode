/**
 * 第一次尝试
 * 普通递归————超时
 */
// export function fib(n: number): number {
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

/**
 * 尾递归
 */
// // 基础框架
// export function fib(n: number) {
//   return fibImpl(0, 1, n);
// } // 执行递归
// export function fibImpl(a: number, b: number, n: number):number {
//   if (n === 0) {
//     return a;
//   }
//   return fibImpl(b, (a + b) % 1000000007, n - 1);
// }


/**
 * 普通循环
 */
export function fib(n: number) {
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, (a + b) % 1000000007];
  }
  return a;
}

/**
 * 测试部分
 */

console.log(fib(1));
console.log(fib(2));
console.log(fib(5));
console.log(fib(45));
