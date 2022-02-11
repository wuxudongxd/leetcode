function longestPalindrome(s: string): string {
  if (s.length === 0) return '';
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let str = '';
    let length = 1;
    str = s[i];
    while (i - length >= 0 && i + length < s.length && s[i - length] === s[i + length]) {
      str = s[i - length] + str + s[i + length];
      length++;
    }
    res = str.length > res.length ? str : res;
  }

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      let str = '';
      let length = 1;
      str = s[i] + s[i + 1];
      while (i - length >= 0 && i + 1 + length < s.length && s[i - length] === s[i + 1 + length]) {
        str = s[i - length] + str + s[i + 1 + length];
        length++;
      }
      res = str.length > res.length ? str : res;
    }
  }
  return res;
}

console.log(longestPalindrome('bbcccbbb'));
