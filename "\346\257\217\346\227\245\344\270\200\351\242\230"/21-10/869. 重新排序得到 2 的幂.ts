function reorderedPowerOf2(n: number): boolean {
  const checkArr = Array(31)
    .fill(0)
    .map((n, i) =>
      Array.from(String(2 ** i))
        .sort()
        .join(''),
    );
  const sortN = Array.from(String(n)).sort().join('');
  for (const verify of checkArr) {
    if (sortN === verify) return true;
  }
  return false;
}
