/**
 * 快速排序
 */
export function quickSort(arr: number[]): number[] {
  const array = Array.from(arr);
  const rec = (array: number[]): number[] => {
    if (array.length <= 1) return array;
    const left: number[] = [];
    const right: number[] = [];
    const mid = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < mid) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
     return [...rec(left), mid, ...rec(right)];
  };
  return rec(array);
}

// test
console.log(quickSort([5, 4, 3, 2, 1]));
