function findNthDigit(n: number): number {
  if (n < 10) return n;
  let count = 0;
  let i = 0;
  // 用一个计数器count计数一共有多少个数字，然后不断累加直到下次会超出n个数字
  while (count + 9 * 10 ** i * (i + 1) < n) {
    count += 9 * 10 ** i * (i + 1);
    i++;
  }
  // 此时已经可以得到第n个数所在的数是 i+1 位了，再多一位就会超过n，所以此时可以用n - count来得出该数在 i+1 位数中的位置
  // （比如，在2位数中的第7个数字，也就是 10， 11， 12， 13中第七个数字也就是 13中的1）。
  count = n - count;
  // 找出该数字所在的那个大的数
  const num = 10 ** i + ~~((count - 1) / (i + 1));
  // 计算处于所在大数的第几位
  const idx = (count - 1) % (i + 1);
  return Number(num.toString()[idx]);
}
