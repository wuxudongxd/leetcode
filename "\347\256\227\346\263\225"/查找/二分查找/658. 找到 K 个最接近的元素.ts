export function findClosestElements(
  arr: number[],
  k: number,
  x: number
): number[] {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let a = Math.abs(x - arr[left]);
    let b = Math.abs(x - arr[right]);
    if (right - left + 1 === k) {
      return arr.slice(left, right + 1);
    }
    if (a < b || (a === b && left < right)) {
      right--;
    } else {
      left++;
    }
  }
  return arr.slice(left, right + 1);
}

// 测试
findClosestElements([1, 2, 3, 4, 5], 4, 3);
