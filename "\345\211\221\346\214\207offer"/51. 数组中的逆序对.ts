function reversePairs(nums: number[]): number {
  let count = 0;
  const rec = (array: number[]): number[] => {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);
    const res: number[] = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        // res.push(orderLeft[0] < orderRight[0] ? (orderLeft.shift() as number) : (orderRight.shift() as number));
        if (orderLeft[0] <= orderRight[0]) {
          res.push(orderLeft.shift() as number);
        } else {
          count += orderLeft.length;
          res.push(orderRight.shift() as number);
        }
      } else if (orderLeft.length) {
        res.push(orderLeft.shift() as number);
      } else if (orderRight.length) {
        res.push(orderRight.shift() as number);
      }
    }
    return res;
  };
  rec(Array.from(nums));
  return count;
}

// test
reversePairs([]);
