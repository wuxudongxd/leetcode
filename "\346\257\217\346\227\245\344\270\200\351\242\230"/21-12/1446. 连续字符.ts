function maxPower(s: string): number {
  if (s.length === 0) return 0;
  let longestChar = '';
  let count = 0;
  let res = 0;
  s.split('').forEach((char) => {
    if (longestChar !== char) {
      longestChar = char;
      count = 1;
    } else {
      count++;
    }
    res = res > count ? res : count;
  });
  return res;
}
