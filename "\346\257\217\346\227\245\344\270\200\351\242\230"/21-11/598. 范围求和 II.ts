function maxCount(m: number, n: number, ops: number[][]): number {
  if (ops.length === 0) return m * n;
  let minA = Number.MAX_SAFE_INTEGER;
  let minB = Number.MAX_SAFE_INTEGER;
  ops.forEach((item) => {
    if (item[0] < minA) {
      minA = item[0];
    }
    if (item[1] < minB) {
      minB = item[1];
    }
  });
  return minA * minB;
}
