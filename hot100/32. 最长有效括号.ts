// function longestValidParentheses(s: string): number {
//   const stack = [];
//   const arr = new Array(s.length).fill(1);
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === ')' && stack[0]?.value === '(') {
//       arr[i] = 0;
//       arr[stack[0].index] = 0;
//       stack.shift();
//     } else {
//       stack.unshift({ index: i, value: s[i] });
//     }
//   }
//   console.log(arr);

//   let sum = 0;
//   let res = 0;
//   for (const item of arr) {
//     if (item) {
//       sum = 0;
//       continue;
//     }
//     sum++;
//     res = Math.max(res, sum);
//   }
//   console.log(res);

//   return res;
// }

/**
 * 动规
 */
const longestValidParentheses = (s: string) => {
  let maxLen = 0;
  const len = s.length;
  const dp = new Array(len).fill(0);
  for (let i = 1; i < len; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        if (i - 2 >= 0) {
          dp[i] = dp[i - 2] + 2;
        } else {
          dp[i] = 2;
        }
      } else if (s[i - dp[i - 1] - 1] === '(') {
        if (i - dp[i - 1] - 2 >= 0) {
          dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
        } else {
          dp[i] = dp[i - 1] + 2;
        }
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }
  return maxLen;
};

longestValidParentheses(')()())');
