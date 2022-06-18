function firstUniqChar(s: string): string {
  const map = new Map();
  let res = ' ';
  for (const char of s) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }
  for (const [char, count] of map.entries()) {
    if (count === 1) {
      res = char;
      break;
    }
  }
  return res;
}

// test
let res = firstUniqChar('');
console.log(res);
