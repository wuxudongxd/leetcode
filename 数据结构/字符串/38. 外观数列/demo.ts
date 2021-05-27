export function countAndSay(n: number): string {
  let ans = "";
  if (n === 1) return "1";
  let str = countAndSay(n - 1);
  let i = 0,
    count = 1;
  while (i < str.length) {
    let j = i;
    let count = 1;
    while (1) {
      if (str[i] === str[i + 1]) {
        count++;
        i++;
      } else {
        i++;
        break;
      }
    }
    ans += count + str[j];
  }
  return ans;
}

/**
 * 测试部分
 */
console.log(countAndSay(6));

