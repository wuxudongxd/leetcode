function printNumbers(n: number): number[] {
  return [...Array(10 ** n).keys()].slice(1);
}
