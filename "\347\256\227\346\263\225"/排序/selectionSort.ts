/**
 * 选择排序
 */
export function selectionSort(arr: number[]): number[] {
  const array = Array.from(arr);
  for (let i = 0; i < array.length - 1; i++) {
    let minIdex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIdex]) {
        minIdex = j;
      }
    }
    if (minIdex !== i) {
      [array[minIdex], array[i]] = [array[i], array[minIdex]];
    }
  }
  return array;
}

// test
console.log(selectionSort([5, 4, 3, 2, 1]));
