/**
 * 插入排序
 */
export function insertionSort(arr: number[]): number[] {
  const array = Array.from(arr);
  for (let i = 1; i < array.length; i++) {
    const outer = array[i];
    let j = i;
    while (j > 0) {
      if (array[j - 1] > outer) {
        array[j] = array[j - 1];
      } else {
        break;
      }
      j--;
    }
    array[j] = outer;
  }
  return array;
}

// test
console.log(insertionSort([5, 4, 3, 2, 1]));
