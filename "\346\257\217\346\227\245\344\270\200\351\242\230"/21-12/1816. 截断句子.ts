// function truncateSentence(s: string, k: number): string {
//   let count = 0;
//   let length = 0;
//   let res = '';
//   for (const char of s) {
//     if (char === ' ') {
//       count++;
//     }
//     length++;
//     if (length > s.length || count >= k) {
//       break;
//     }
//     res += char;
//   }
//   return res;
// }

function truncateSentence(s: string, k: number): string {
  let count = 0;
  let i = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      count++;
    }
    if (count === k) {
      break;
    }
  }
  return s.slice(0, i);
}
