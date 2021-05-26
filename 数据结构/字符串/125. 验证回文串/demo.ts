export function isPalindrome(s: string): boolean {
  s = s.replace(/[^0-9a-zA-Z]*/g, "").toLowerCase();
  const length = s.length;
  for (let i = 0; i < length / 2; i++) {
    if (s[i] !== s[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * 测试部分
 */
console.log(isPalindrome("ab_a"));
