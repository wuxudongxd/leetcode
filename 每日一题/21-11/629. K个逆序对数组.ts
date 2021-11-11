function kInversePairs(n: number, k: number): number {
  if (n === 1) return n - k;
  let lastPreSum: bigint[] = new Array(k + 1).fill(1n);
  for (let i = 2; i <= n; i++) {
    const current: bigint[] = new Array(k + 1).fill(0n);
    for (let j = 0; j <= k; j++) {
      const left = Math.max(0, j - i + 1);
      const right = j;
      current[j] = lastPreSum[right] - (left === 0 ? 0n : lastPreSum[left - 1]);
    }
    if (i === n) return Number(current[k] % 1000000007n);
    lastPreSum[0] = current[0];
    for (let t = 1; t <= k; t++) lastPreSum[t] = lastPreSum[t - 1] + current[t];
  }
}
