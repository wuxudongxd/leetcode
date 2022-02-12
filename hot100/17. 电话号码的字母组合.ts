function letterCombinations(digits: string): string[] {
  const map = [...new Array(8).keys()].map((num) => {
    const base = num * 3;
    return String.fromCharCode(base + 97, base + 98, base + 99);
  });
  map[5] = 'pqrs';
  map[6] = 'tuv';
  map[7] = 'wxyz';

  const arr = digits.split('').map((digit) => map[Number(digit) - 2]);

  let res = arr.length ? arr[0].split('') : [];

  for (let i = 1; i < arr.length; i++) {
    res = res.map((str) => arr[i].split('').map((char) => str + char)).flat(1);
  }
  console.log(res);

  return res;
}

letterCombinations('7');
