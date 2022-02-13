function merge(intervals: number[][]): number[][] {
  const newArr = [...intervals].sort((a, b) => a[0] - b[0]);
  const res: number[][] = [];

  for (const item of newArr) {
    if (!res.length || res[res.length - 1][1] < item[0]) {
      res.push(item);
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], item[1]);
    }
  }
  console.log(res);

  return res;
}

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
