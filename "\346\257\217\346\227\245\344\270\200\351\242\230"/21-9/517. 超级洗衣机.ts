function findMinMoves(machines: number[]): number {
  const ARG = machines.reduce((a, b) => a + b, 0) / machines.length;
  if (ARG % 1 !== 0) return -1;
  const dif = machines.map((num) => num - ARG);
  const ans = [...dif];

  for (let i = 0; i < dif.length - 1; i++) {
    // 给下一位加上当前位的数字
    dif[i + 1] += dif[i];
  }

  return dif[dif.length - 1] === 0
    ? Math.max(...dif.map((i) => Math.abs(i)), ...ans)
    : -1;
}
