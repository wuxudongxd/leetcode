export function longestCommonPrefix(strs: string[]): string {
  let ans = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (char !== strs[j][i]) {
        return ans;
      }
    }
    ans += char;
  }
  return ans;
}
