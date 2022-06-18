function countDigitOne(n: number): number {
  let res = '';
  const regex = /[^1]*/g;
  for (let i = 0; i <= n; i++) {
    if (i.toString().includes('1')) {
      res += i.toString().replace(regex, '');
    }
  }
  return res.length;
}
