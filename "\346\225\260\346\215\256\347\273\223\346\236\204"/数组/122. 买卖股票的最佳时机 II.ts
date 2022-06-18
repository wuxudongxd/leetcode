export function maxProfit(prices: number[]): number {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    let tmp = prices[i + 1] - prices[i];
    if (tmp > 0) sum += tmp;
  }
  return sum;
}
